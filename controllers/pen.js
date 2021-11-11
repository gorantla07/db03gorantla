var Pen = require('../models/pen');
// List of all Pens
exports.pen_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Pen list');
};
// for a specific Pen.
exports.pen_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Pen detail: ' + req.params.id);
};
// Handle Pen create on POST.
exports.Pen_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Pen();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"pen_type":"Red", "thickness":1, "cost":10}
    document.pName = req.body.pName;
    document.pColor = req.body.pColor;
    document.pPrice = req.body.pPrice;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Pen delete form on DELETE.
exports.pen_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Pen delete DELETE ' + req.params.id);
};
// Handle Pen update form on PUT.
exports.pen_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Pen update PUT' + req.params.id);
};

// List of all Pen
exports.pen_list = async function (req, res) {
    try {
        thePen = await Pen.find();
        res.send(thePen);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.pen_view_all_Page = async function (req, res) {
    try {
        thePen = await Pen.find();
        res.render('pen', {
            title: 'Pen Search Results',
            results: thePen
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};