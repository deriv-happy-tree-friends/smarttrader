const color = require('cli-color');
const fs    = require('fs');
const Path  = require('path');
const util  = require('util');

exports.root_path = require('app-root-path').path;

exports.pages = require('./pages.js').map(p => ({
    save_as      : p[0],
    tpl_path     : p[1],
    layout       : p[2],
    title        : p[3],
    excludes     : p[4],
    only_ja      : p[4] && /^NOT-ja,en$/.test(p[4]),
    current_route: p[0].replace(/^(.+)\//, ''),
}));

exports.languages = ['EN', 'DE', 'ES', 'FR', 'ID', 'IT', 'JA', 'KO', 'PL', 'PT', 'RU', 'TH', 'VI', 'ZH_CN', 'ZH_TW'];

exports.print = (text) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(text);
};

exports.messageStart = (msg, no_pad) => `${color.cyan('>')} ${msg} ${no_pad ? '' : '.'.repeat(33 - msg.length)}`;
exports.messageEnd   = (duration, no_new_line) => (
    `${color.green(' ✓ Done')}${duration ? color.blackBright(`  (${duration.toLocaleString().padStart(6)} ms)`) : ''}${no_new_line ? '' : '\n'}`
);

const existsAsync = util.promisify(fs.exists);
const mkdirAsync  = util.promisify(fs.mkdir);

const ensureDirectoryExistence = async (filePath) => {
    try {
        const dirname = Path.dirname(filePath);
        if (await existsAsync(dirname)) {
            return;
        }
        await ensureDirectoryExistence(dirname);
        await mkdirAsync(dirname);
    } catch (e) {
        //
    }
};

const readFileAsync = util.promisify(fs.readFile);
exports.readFile = (path) => readFileAsync(path, 'utf8');

const writefileAsync = util.promisify(fs.writeFile);
exports.writeFile = async (path, data) => {
    await ensureDirectoryExistence(path);
    return await writefileAsync(path, data);
};
