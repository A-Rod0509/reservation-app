const Product = require('./model/product')

class FakeDb {

    constructor() {
        this.products = [
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'aaaa',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingtext2: 'サンプル文章　サンプル文章　サンプル文章　サンプル文章',
                headingtext3: 'サンプル　サンプル　サンプル　サンプル',
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'bbbb',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingtext2: 'サンプル文章　サンプル文章　サンプル文章　サンプル文章',
                headingtext3: 'サンプル　サンプル　サンプル　サンプル',
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                description: 'cccc',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingtext2: 'サンプル文章　サンプル文章　サンプル文章　サンプル文章',
                headingtext3: 'サンプル　サンプル　サンプル　サンプル',
            },
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Speciall',
                price: 999,
                description: 'dddd',
                heading1: 'サンプルテキスト1',
                heading2: 'サンプルテキスト2',
                heading3: 'サンプルテキスト3',
                headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト',
                headingtext2: 'サンプル文章　サンプル文章　サンプル文章　サンプル文章',
                headingtext3: 'サンプル　サンプル　サンプル　サンプル',
            },
        ]
    }
    
    async initDb() {
        await this.cleanDb()
        this.pushProductsToDb()
    }

    async cleanDb() {
        await Product.deleteMany({})
    }

    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb() {
        this.pushProductsToDb()
    }
}

module.exports = FakeDb