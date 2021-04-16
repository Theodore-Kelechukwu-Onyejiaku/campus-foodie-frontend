import React, { useEffect, useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'


const AddProduct = ({ dish, postDish }) => {
    useEffect(() => {
        window.addEventListener('load', function () {
            var elems = document.querySelectorAll('.chips');
            var instances = M.Chips.init(elems);
        });

    }, [])
    const [fileInputState, setFileInputState] = useState("");
    const [selectedFile, setSelectedFile] = useState("");
    const [previewSource, setPreviewSource] = useState("");
    const [formData, setFormData] = useState({ dishName: "", price: "", description: "", dishPicture: "" });
    const [formError, setFormError] = useState("");
    const [successReport, setSuccessReport] = useState(dish.successMess);
    const [errorReport, setErrorReport] = useState(dish.errorMess);
    const [loading, setLoading] = useState(dish.isLoading);

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        // console.log(file.name)
        previewFile(file);
    }

    const handleInput = (e, name) => {
        setFormError("");
        setSuccessReport("");
        setErrorReport("");
        let value = e.target.value;
        setFormData(Object.assign({}, formData, { [name]: value }));
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result)
            setFileInputState(reader.result)
            setSelectedFile(reader.result)
            setFormData(Object.assign({}, formData, { dishPicture: reader.result }));
        }
    }

    const handleSubmitFile = (e) => {
        setLoading(loading)
        e.preventDefault();
        checkFormData(formData);
        if (formError) { return };
        if (!previewSource) return;
        postDish(formData);
        setLoading(!loading)
    }

    const checkFormData = (formData) => {
        for (let data in formData) {
            if (formData[data] === "") {
                setFormError("Please fill all fields")
                M.toast({ html: "Please fill in the form correctly!", classes:"red white-text" })
                return;
            }
        }
    }

    return (
        <div className="row top-margin">
            {successReport ? <div className="green white-text center-align successMessage">{successReport}</div>: <div></div>}
            {errorReport ? <div className="red white-text center-align errorMessage">{errorReport}</div>: <div></div>}
            {loading ? <div className="center-align"><div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div><div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
                </div>
                :
            <>
            <div className="col s12 m3"></div>
            <div className="col s12 m6">
                <form action="" onSubmit={(e) => { handleSubmitFile(e) }} method="POST">
                    <h4 className="center-align" style={{ fontFamily: "'Tangerine', cursive" }}>Add New Dish</h4>
                    {formError ? <h5 className="red-text center-align">Please fill all the fields</h5> : <></>}
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">₦</i>
                            <input id="icon_prefix" type="number" className="validate" onChange={(e, name = "price") => { handleInput(e, name) }} value={formData.price} />
                            <label htmlFor="icon_prefix">Price</label>
                            {!formData.price ? <span className="red-text">Please fill in this field</span> : <span></span>}
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">restaurant</i>
                            <input id="icon_telephone" type="text" className="validate" onChange={(e, name = "dishName") => { handleInput(e, name) }} value={formData.dishName} />
                            <label htmlFor="icon_telephone">Dish Name</label>
                            {!formData.dishName ? <span className="red-text">Please fill in this field</span> : <span></span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" onChange={(e, name = "description") => { handleInput(e, name) }} value={formData.description}></textarea>
                            <label htmlFor="textarea1">Enter dish description</label>
                            {!formData.description ? <span className="red-text">Please fill in this field</span> : <span></span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="categories" className="materialize-textarea" onChange={(e, name = "categories") => { handleInput(e, name) }} value={formData.categories}></textarea>
                            <label htmlFor="categories">Enter categories. Eg: breakfast, dessert</label>
                            {!formData.categories ? <span className="red-text">Please fill in this field</span> : <span></span>}
                        </div>
                    </div>

                    <div className="file-field input-field">
                        <div className="btn">
                            <span>Dish Picture</span>
                            <input type="file" name="image" onChange={handleFileInputChange} accept="image/*" />

                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" />
                            {!formData.dishPicture ? <span className="red-text">Please Select a picture</span> : <span></span>}
                        </div>
                    </div>
                    <div className="center-align">
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
                <br />
                {
                    previewSource && (
                        <img src={previewSource} className="responsive-img" alt="chosen" />
                    )
                }

            </div>
            <div className="col s12 m3"></div>
            </>
            }
        </div>
    );
}

export default AddProduct;