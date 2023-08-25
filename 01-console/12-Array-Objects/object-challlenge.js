const library = {
    title: 'Three Dragon',
    author: 'JJR Token',
    status: {
        own: true,
        reading: false,
        read: false
    }
}

library.status.read = true;

const { title: firstBook } = library;

const toJson = JSON.stringify(library);

console.log(toJson);