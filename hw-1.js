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
    const fromFolder = folders.find((folder) => folder.files && folder.files.find((file) => file.id === from))
    const toFolder = folders.find((f) => f.id === to)

    if (fromFolder && toFolder) {
        const fileIndex = fromFolder.files.findIndex((f) => f.id === from)
        if (toFolder.files) {
            toFolder.files.push(fromFolder.files[fileIndex])
        } else {
            toFolder.files = {files: fromFolder.files[fileIndex]}
        }

        fromFolder.files.splice(fileIndex, 1);
        console.log(folders.map((f) => f.files));
    } else {
        console.log("Id bulunamadı");
    }
}

function copy(from, to) {
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
        console.log("Id bulunamadı");
    }
}

function remove(id) {
    const file = folders.find((folder) => folder.files && folder.files.find((file) => file.id === id))

    if (file) {
        const copyIndex = file.files.findIndex((f) => f.id === id)
        file.files.splice(copyIndex, 1);

        console.log(folders.map((f) => f.files));

    } else {
        console.log("Id bulunamadı");
    }
}

function removeFolder(id) {
    const folder = folders.findIndex((f) => f.id === id)
    if (folder !== -1) {
        folders.splice(folder, 1);

        console.log(folders.map((f) => f.files));
    } else {
        console.log("Id bulunamadı");
    }
}

function parentFolderOf(id) {
    const parentFolder = folders.find((folder) => folder.files && folder.files.find((file) => file.id === id))

    return parentFolder ? console.log(parentFolder.id) : console.log("Id bulunamadı");
}


move(17,6) // dosyayı klasöre taşıyacak
copy(18,7) // kopyasını oluşturacak
remove(17) // dosyayı silecek
removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
parentFolderOf(17)