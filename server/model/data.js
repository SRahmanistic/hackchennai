const mongoose = require('mongoose');

const Data = new mongoose.Schema(
    {
        "categories": [
            {
                "category": "",
                "shopid": "",
                "items": [
                    {
                        "product": {
                            "id": "",
                            "picture": "",
                            "itemname": "",
                            "quantity": "",
                            "price": "",
                            "details": ""
                        }

                    }
                ]
            }
        ]
    });
const Data1 = module.exports = mongoose.model('Data', Data);
