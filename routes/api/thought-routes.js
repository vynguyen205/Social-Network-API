const router = require('express').Router();
const { Thought, Reaction} = require('../../models')

//TODO: ROUTE TO GET ALL THOUGHTS
router.get('/', async (req,res)=> {
    try {
        let thoughtData = Thought.findAll()
        res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json(thoughtData)
        console.log(err)
    }

})

//TODO: ROUTE TO CREATE A NEW THOUGHT
router.post('/', async (req,res)=> {
    try {
        let thoughtData = Thought.create()
        res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json()
        console.log(err)
    }    
});

//TODO: ROUTE TO GET SINGLE THOUGHT BASED ON THOUGHT ID
router.get('/:thoughtId', async (req,res)=> {
    try {
        let thoughtData = Thought.findById(req.body)
        res.status(200).json(thoughtData)
    } catch (err) {
        res.status(500).json()
        console.log(err)
    }  
})

//TODO: ROUTE TO UPDATE A THOUGHT
router.put('/', async (req,res)=> {
    try {
        
    } catch (err) {
        res.status(500).json()
        console.log(err)
    }  
})

//TODO: ROUTE TO DELETE A THOUGHT BASED ON THOUGHT ID
router.delete('/:thoughtId', async (req,res)=> {
    try {
        
    } catch (err) {
        res.status(500).json()
        console.log(err)
    }  
});

//TODO: ROUTE TO ADD REACTION TO A THOUGHT
router.post('/:thoughtId/reactions', async (req,res)=> {
    try {
        
    } catch (err) {
        res.status(500).json()
        console.log(err)
    }  
});

//TODO: ROUTE TO DELETE A REACTION ON A THOUGHT
router.delete('/:thoughtId/reactions/:reactionId', async (req,res)=> {
    try {
        
    } catch (err) {
        res.status(500).json()
        console.log(err)
    }  
})

module.exports = router;
