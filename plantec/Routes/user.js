const {Router} = require("express")
const prisma = require("../database/index")

const router = Router()

router.get("/users", async (req, res)=>{
    const users = await prisma.user.findMany()
    res.json(users)
})
//Criando um novo user 
router.post("/newUser", async (req, res)=>{
    const {name, email} = req.body
    const newUser = await prisma.user.create({
        data:{
            name,
            email
        }
    })
    res.status(201).json(newUser)
})

router.get("/user/:id", async(req, res)=>{
    const user = await prisma.user.findUnique({
        where:{
            id: Number(req.params.id)
        },
        include:{
            Plants: true
        }
    })
    res.json(user)
})

router.put("/updataUser/:id", async(req, res)=>{
    const {name, email} = req.body
    const updateUser = await prisma.user.update({
        data:{name, email},
        where:{id: Number(req.params.id)}
    })
    res.json(updateUser)
})
router.delete("/deleteUser/:id", async (req, res) => {
    const deletedUser = await prisma.user.delete({
      where: { id: Number(req.params.id) }
    })
    res.json({ deletedUser })
  })
  
module.exports = router