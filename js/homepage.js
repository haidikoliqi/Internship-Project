
const config = {
    type: 'carousel',
    focusAt: "center",
    perView: 5,
    breakpoints: {
        1280:{
            perView: 3
        },
        800: {
            perView: 2
        },
        640: {
            perView: 1
        },
    }
}
new Glide(".glide", config).mount();