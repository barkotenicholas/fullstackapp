import { AddToCart, GetCartItem, UpdateCart } from "../models/Cart.model.js";


export const AddCart = async (req, res) => {


    try {

        const { uid, quantity, pid, pname, pdesc, pprice, pdiscount, imageurl } = req.body;
        const response = await AddToCart({
            uid: uid,
            quantity: quantity,
            pid: pid,
            pname: pname,
            pdesc: pdesc,
            pprice: pprice,
            pdiscount: pdiscount,
            pimageurl: imageurl
        })
        if (response) return res.status(200).json({ success: true, message: "added to cart successfully" });

    } catch (error) {
        console.log(error.message);
        return res.status(200).json({ success: false, message: error.message });
    }


}

export const GetCart = async (req, res) => {

    try {

        const { uid } = req.body;

        const rs = await GetCartItem(uid)
        console.log(rs);
        if (rs.length === 0) return res.status(200).json({ message: "There are no cart items" });
        return res.status(200).json(rs)

    } catch (error) {
        return res.status(200).json({ success: false, message: error.message });

    }

}

export const updateQuantity = async (req, res) => {

    try {
        const { user_id, quantity, product_id, product_name, product_desc, product_price, product_dicount } = req.body;
        const rs = await UpdateCart({
            uid: user_id,
            quantity: quantity,
            pid: product_id,
            pname: product_name,
            pdesc: product_desc,
            pprice: product_price,
            pdiscount: product_dicount
        });
        console.log(rs);
        if (rs) return res.status(200).json({ success: true, message: "updated cart quantity successfully" });

    } catch (error) {
        return res.status(200).json({ success: false, message: error.message });

    }

}