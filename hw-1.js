const folders = [
    {
        id: 5,
        name: 'Klasör 1',
        files: [
            {id: 17, name: 'profil.jpg'},
            {id: 18, name: 'manzara.jpg'},
        ],
    },
    {
        id: 6,
        name: 'Klasör 2',
        files: [
            {id: 21, name: 'foto.png'},
            {id: 22, name: 'dosya.xls'},
        ],
    },
    {
        id: 7,
        name: 'Klasör 3',
    },
]

function move(from, to) {
    //find the folder that file moved from
    const fromFolder = folders.find((folder) => folder.files && folder.files.find((file) => file.id === from))

    //find the folder that file moved to
    const toFolder = folders.find((f) => f.id === to)

    if (fromFolder && toFolder) {
        //the index of the file to be moved
        const fileIndex = fromFolder.files.findIndex((f) => f.id === from)

        if (toFolder.files) {
            //if any file exist on the directory move file
            toFolder.files.push(fromFolder.files[fileIndex])

        } else {
            //or create a new file object and move
            toFolder.files = {files: fromFolder.files[fileIndex]}
        }

        //delete file from old directory
        fromFolder.files.splice(fileIndex, 1);

        console.log(folders.map((f) => f.files));

    } else {
        console.log("File not found");
    }
}

function copy(from, to) {
    //same as the move method without deleting the file from the old folder
    const fromFolder = folders.find((folder) => folder.files && folder.files.find((file) => file.id === from))
    const toFolder = folders.find((f) => f.id === to)

    if (fromFolder && toFolder) {
        const fileIndex = fromFolder.files.findIndex((f) => f.id === from)

        if (toFolder.files) {
            toFolder.files.push(fromFolder.files[fileIndex])

        } else {
            toFolder.files = [fromFolder.files[fileIndex]]
        }

        console.log(folders.map((f) => f.files));

    } else {
        console.log("File not found");
    }
}

function remove(id) {
    //find folder
    const folder = folders.find((folder) => folder.files && folder.files.find((file) => file.id === id))

    if (folder) {
        //find file index to be removed
        const copyIndex = folder.files.findIndex((f) => f.id === id)

        //remove file
        folder.files.splice(copyIndex, 1);

        console.log(folders.map((f) => f.files));

    } else {
        console.log("File not found");
    }
}

function removeFolder(id) {
    //find folder index to be removed
    const folder = folders.findIndex((f) => f.id === id)

    if (folder !== -1) {
        //if folder exist remove file
        folders.splice(folder, 1);

        console.log(folders.map((f) => f.files));

    } else {
        console.log("File not found");
    }
}

function parentFolderOf(id) {
    //find parent folder
    const parentFolder = folders.find((folder) => folder.files && folder.files.find((file) => file.id === id))

    //return parentfolder id
    return parentFolder ? console.log(parentFolder.id) : console.log("File not found");
}


move(17, 6) // dosyayı klasöre taşıyacak
//copy(18,7) // kopyasını oluşturacak
//remove(17) // dosyayı silecek
//removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
//parentFolderOf(17)