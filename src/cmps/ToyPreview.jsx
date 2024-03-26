import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toyService } from "../services/toy.service.js";
import { saveToy } from "../store/actions/toy.actions.js";


export function ToyPreview({ toy }) {
    const dispatch = useDispatch()


    return <article>
        <h4>{toy.title}</h4>
        {!toy.img && <img className="toy-preview-img" src="https://cdn.dribbble.com/userupload/4008405/file/original-0f5599524e07b7c1752d029e4eab1e39.png?resize=1200x1200&vertical=center" alt="" />}
        {toy.img && <img className="toy-preview-img" src={toy.img} alt="" />}
        <p>Price: <span>{toy.price}</span></p>
    </article>
}