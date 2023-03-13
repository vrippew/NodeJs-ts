import rBase from "./Base.route";
import Auth from "../middleware/Authorization";
import Validator from "../middleware/validation/validator";


import cOrder from "../controllers/Orders.controller";
import cBook from "../controllers/Book.controller"

class UserRoutes extends rBase {
    public routes(): void {
        this.router.post("/Insert",Auth.authenticated,Validator.insertBook,cBook.Insert);
        this.router.get("/",Auth.authenticated,cBook.getAll);
        this.router.get("/find/:id",Auth.authenticated,cBook.getById);
        this.router.post("/update/:id",Auth.authenticated,Validator.insertBook,cBook.update);
        this.router.delete("/delete/:id",Auth.authenticated,cBook.delete);
        this.router.post("/buy",Auth.authenticated,cOrder.buy)
    }
}
export default new UserRoutes().router;