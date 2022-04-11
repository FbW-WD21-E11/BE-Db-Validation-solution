import mongoose from "mongoose";

const pokedexSchema = mongoose.Schema({});

/*
In the following line, the third argument with the string "pokedex"
forces MongoDB to use the name "pokedex" for the collection
 */
const Pokedex = mongoose.model("pokedex", pokedexSchema, "pokedex");

export default Pokedex;
