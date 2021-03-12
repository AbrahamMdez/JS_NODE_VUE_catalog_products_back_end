import Article from '../models/article.js';

export const createNewArticle = async(req, res) => {

    const { title, description } = req.body;
       
    try {
        const newArticle = await new Article({ title, description });
        await newArticle.save();
        res.status(200).json(newArticle);
    } catch (error) {
        return res.status(500).json({
            message: 'Error', 
            error
        });
    };
};

export const getArticles = async(req, res) => {

    try {
        const articlesToFind = await Article.find();
        res.json(articlesToFind);
    }catch (error) {
        return res.status(400).json({
            message: 'Error',
            error
        });
    };
};

export const getOneArticle = async(req, res) => {
   
    const { id } = req.params.id;

    try {
        const oneArticle = await Article.findOne({ id });
        res.json(oneArticle)
    } catch (error) {
        return res.status(400).json({
            message: 'Error',
            error
        })
    }
    
};

export const updateArticle = async(req, res) => {

    const { title, description } = req.body;

    try{
        const articleUpdated = await Article.findByIdAndUpdate(req.params.id, { title, description },
        { new: true });
        res.json(articleUpdated);
    }catch (error) {
        return res.status(400).json({
            message: 'Error',
            error
        });
    }
};

export const deleteArticle = async(req, res) => {

    try{
        const articleDeleted = await Article.findByIdAndDelete(req.params.id);
        if(!articleDeleted) {
            return res.status(400).json({
                message: 'Error no hay tarea',
                error 
            });
        };
        res.json(articleDeleted);
    }catch (error) {
        return res.status(400).json({
            message: 'Error',
            error
        });
        
    }
};
