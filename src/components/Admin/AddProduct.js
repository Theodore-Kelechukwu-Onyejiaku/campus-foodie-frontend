import React,{useEffect, useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'


const AddProduct = () => {
    useEffect(()=>{
        window.addEventListener('load', function() {
            var elems = document.querySelectorAll('.chips');
            var instances = M.Chips.init(elems);
            console.log("hi")
        });
        
    }, [])
    const [fileInputState, setFileInputState] = useState("");
    const [selectedFile, setSelectedFile] = useState("");   
    const [previewSource, setPreviewSource] = useState(""); 

    const handleFileInputChange = (e) =>{
        const file = e.target.files[0];
        console.log(file)
        previewFile(file);
    }

    const previewFile= (file)=> {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend =() =>{
            setPreviewSource(reader.result)
            setSelectedFile(reader.result)
        }
    }

    const handleSubmitFile = (e) =>{
        e.preventDefault();
        if(!previewSource) return;
        uploadImage(previewSource);
    }

    const uploadImage = (base64EncodedImage) =>{
        console.log(base64EncodedImage)
    }

    return (
        <div className="row top-margin">
            <div className="col s12 m3"></div>
            <div className="col s12 m6">
                <form action="#" onSubmit={handleSubmitFile}>
                    <h4 className="center-align" style={{ fontFamily: "'Tangerine', cursive" }}>Add New Dish</h4>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">₦</i>
                            <input id="icon_prefix" type="number" className="validate" />
                            <label htmlFor="icon_prefix">Amount</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">restaurant</i>
                            <input id="icon_telephone" type="text" className="validate" />
                            <label htmlFor="icon_telephone">Dish Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label htmlFor="textarea1">Enter dish description</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="chips">
                        <input class="custom-class" />
                        </div>
                    </div>
        
                    <div className="file-field input-field">
                        <div className="btn">
                            <span>Dish Picture</span>
                            <input type="file" name="image" onChange={handleFileInputChange} value={fileInputState} accept="image/*"/>
                            
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" />
                        </div>
                    </div>
                    <div className="center-align">
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>
                <br/>
                {
                    previewSource && (
                        <img  src={previewSource} className="responsive-img" alt="chosen" />
                    )
                }

            </div>
            <div className="col s12 m3"></div>
        </div>
    );
}

export default AddProduct;