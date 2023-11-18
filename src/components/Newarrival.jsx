import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import firestore from '../firebase.js';


const Newarrival = () =>{
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    

    const getMovies = async () => {
        const ref = query(collection(firestore, "movies"), where("type", "==", "new"));
        const querySnapshot = await getDocs(ref);

        const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        setMovies(data);
    }
    console.log(movies);
    useEffect(() => {
        getMovies();
    }, []);

    

    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <h4 className="movie-heading">New to Disney+</h4>
                {movies.map((movie,key) => movie.type === 'new'?
                    <div key={movie.id} className="col-lg-3 col-md-6 col-6">
                        <div className="card movie-card">
                            <Link to={'/detail/'+ movie.id} >
                                <img src={movie.cardImg} className="card-img-top" alt="..." id={movie.id}/>
                            </Link>
                        </div> 
                    </div>:null
                )}
            </div>
        </div>
        </>
    )
}

export default Newarrival;