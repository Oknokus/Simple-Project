class Utils {
    constructor() {
        this.keyName = "products"
    }
    getProducts() {
         const productsStorage = localStorage.getItem(this.keyName);
         if(productsStorage !== null) {
            return JSON.parse(productsStorage)
         }
         return []
    } 
    putProducts(id) {
        let productsAll = this.getProducts();
        const index = productsAll.indexOf(id);
        let pushProducts = false; 

        if(index === -1) {
            productsAll.push(id)
            pushProducts = true
        } else {
            productsAll.splice(index,1)
        }
      
        localStorage.setItem(this.keyName, JSON.stringify(productsAll))
        return {
            productsAll, pushProducts
        }
    }    
}

const util = new Utils();
util.putProducts("el2");

