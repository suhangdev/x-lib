const router = express.Router()

router.get('/', (res: any) => {
    res.status(200).send('nmsl')
})

module.exports = router