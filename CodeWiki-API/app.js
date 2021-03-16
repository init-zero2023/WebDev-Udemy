const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true, useUnifiedTopology: true });

const articleSchema = {
    title: String,
    content: String,
};

const Article = mongoose.model('Article', articleSchema);

// app.get('/', (req, res) => {
//     res.redirect('/articles');
// });
// app.get('/articles', (req, res) => {

// });

// app.post('/articles', (req, res) => {
//     // console.log(req.body.title);
//     // console.log(req.body.content);

// });

// app.delete('/articles', (req, res) => {

// });


// request targeting all article

app.route('/articles')
    .get((req, res) => {
        Article.find({}, (err, foundArticles) => {
            if (err) {
                console.log(err.message);
                res.send(err);
            } else {
                if (foundArticles.length == 0) {
                    res.send("Nothing to show. Add some articles!!");
                } else {
                    console.log(foundArticles);
                    // res.send("Check the console");
                    res.send(foundArticles);
                }

            }
        });
    })
    .post((req, res) => {
        const title = req.body.title;
        const content = req.body.content;
        const article = new Article({
            title: title,
            content: content,
        });
        article.save((err) => {
            if (err) {
                res.send("Unable to save data");
            } else {
                res.send("Successfully added a new article");
            }
        });
    })
    .delete((req, res) => {
        Article.deleteMany({}, (err) => {
            if (err) {
                res.send("Unable to delete the articles collection");
            } else {
                res.send("Successfully deleted all the articles");
            }
        });
    });

// request targeting a specific article

app.route('/articles/:customArticle')
    .get((req, res) => {
        Article.findOne({ title: req.params.customArticle }, (err, result) => {
            if (err) {
                res.send("Something went wrong!!");
            } else {
                if (result) {
                    res.send(result);
                } else {
                    res.send("Unable to find your desired article!!!");
                }
            }
        });
    })
    .put((req, res) => {
        Article.update({ title: req.params.customArticle }, { title: req.body.title, content: req.body.content }, { overwrite: true }, (err, result) => {
            if (err) {
                res.send("Unable to update your article");
            } else {
                res.send("Article changed successfully!");
            }
        });
    })
    .patch((req, res) => {
        // console.log(req.body);
        Article.updateOne({ title: req.params.customArticle }, { $set: req.body }, (err) => {
            if (err) {
                res.send("Unable to update you article");
            } else {
                res.send("Article updated Successfully");
            }
        });
    })
    .delete((req, res) => {
        Article.deleteOne({ title: req.params.customArticle }, (err) => {
            if (err) {
                res.send("Unable to delete desired article");
            } else {
                res.send("Article deleted successfully!!");
            }
        })
    });

app.listen(3000, () => {
    console.log("Port is listening to port 3000");
});