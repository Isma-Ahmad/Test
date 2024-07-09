const {Router} = require("express");
const router = Router();
const controller = require("../controller/user_controller");


router.get("/table", controller.c_table);
router.get('/', controller.getUser);
router.get('/:id', controller.getUserById);
router.post('/' , controller.addUser);
router.put('/:id',controller.updateUser);
router.delete('/:id' , controller.deleteUser);

module.exports = router;

