module.exports = async function (context, req) {
    const version = process.versions.node;
    context.res.json({ version });
};
