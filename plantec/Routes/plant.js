const { Router } = require("express");
const prisma = require("../database/index");

const router = Router()

router.get("/plants", async(req, res)=>{
    const plantss = await prisma.plants.findMany({
        orderBy: {plantingTime: "desc"}
    })
    res.json(plantss)
})
router.get("/plants/:id", async (req, res) => {
  
    const post = await prisma.plants.findUnique({
      where: { id: Number(req.params.id) },
      include: { author: true }
    })
    res.json(post)
  })
router.post("/newPlant", async (req, res)=>{
    const {typeOfPlant, descriptionOfPlant, planted} = req.body
    const newPlant = await prisma.plants.create({
        data:{
            namePlant: req.body.namePlant,
            typeOfPlant: req.body.typeOfPlant,
            descriptionOfPlant: req.body.descriptionOfPlant,
        }
    })
    res.status(201).json(newPlant)
})
router.put("/updataPlant/:id", async(req, res)=>{
    const {namePlant, typeOfPlant, descriptionOfPlant, planted} = req.body
    const updatePlant = await prisma.plants.update({
        data: {namePlant, typeOfPlant, descriptionOfPlant, planted},
        where:{id: Number(req.params.id)}
    })
    res.json(updatePlant)
})


  router.delete("/deletePlant/:id", async (req, res) => {
    const deletedPlant = await prisma.plants.delete({
      where: { id: Number(req.params.id) }
    })
    res.json({ deletedPlant })
  })
  
module.exports = router