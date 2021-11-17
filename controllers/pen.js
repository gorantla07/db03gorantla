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
exports.pen_delete =async function (req, res) {
    console.log("delete "  + req.params.id) 
    try { 
        result = await Pen.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
};

// Handle Pen update form on PUT. 
exports.pen_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Pen.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.pName)  toUpdate.pName = req.body.pName; 
        if(req.body.pColor) toUpdate.pColor = req.body.pColor; 
        if(req.body.pPrice) toUpdate.pPrice = req.body.pPrice; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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

// for a specific pen. 
exports.pen_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Pen.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
};

exports.pen_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Pen.findById( req.query.id) 
        res.render('pendetail',  
{ title: 'Pen Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};

// Handle building the view for creating a pen. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.pen_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('pencreate', { title: 'Pen Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a pen. 
// query provides the id 
exports.pen_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Pen.findById(req.query.id) 
        res.render('penupdate', { title: 'Pen Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.pen_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Pen.findById(req.query.id) 
        res.render('pendelete', { title: 'Pen Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 