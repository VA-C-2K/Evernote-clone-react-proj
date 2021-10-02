export const addNote = (note) =>{
    return (dispatch,getState,{ getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('notes')
        .add({
            ...note,
            favorite:false,
            createdAt:new Date(),
        })
        .then(() =>{
            console.log("add the note sucessfully")
        })
        .catch(err =>{
            console.log(err)
        })
    }
}

export const deleteNote  = (note) =>{
    return (dispatch,getState,{ getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).delete()
        .then(() =>{
            console.log("delete the note sucessfully")
        })
        .catch(err =>{
            console.log(err)
        })
    }
}

export const toggleFav  = (note) =>{
    return (dispatch,getState,{ getFirestore }) => {
        const favstats = !note.favorite
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).update({
            favorite : favstats
        })
        .then(() =>{
            console.log(" toggle fav note sucessfully")
        })
        .catch(err =>{
            console.log(err)
        })
    }
}
export const updateNote  = (note) =>{
    return (dispatch,getState,{ getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).update({
            title:note.title,
            content:note.content
        })
        .then(() =>{
            console.log(" toggle fav note sucessfully")
        })
        .catch(err =>{
            console.log(err)
        })
    }
}


