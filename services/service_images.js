var appRoot = angular.module('myApp');
appRoot.service('ImageService', function () {
    this.imagesList = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf_NiL1fmBuSfj6nNJZQbTSiE_mDHNYogXjRnDzueQowmRqDVcxQ",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwUHPyz8C7T3lsF2MzaVIRfcqRHGSbHW5y1GDHb4h7-XSKosFShg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6E_fFBharOKCQETNqFmnYMRyjIejKZpQud0JZNE1uOMyPZkPY",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQJGG4jFjwdVvgM6OPt5abbB2FUbELfY2EVzVEmUfRUWpjaiDWw",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxGdOrSBpE8sjVca_g5jzEnnA_QPhK8eCte5qTAhrj3Bv2js_NlQ",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9---FPqNwrNHPrn8KHWovK76zBmdMgAbvhh7l4DUYGa_GRPg5xA",
        "https://i0.wp.com/images6.fanpop.com/image/photos/37600000/Walt-Disney-Posters-Aladdin-walt-disney-characters-37687960-1461-2026.jpg?w=600"
    ];

    this.getImages = function () {
        return this.imagesList;
    }

    this.createImage = function (imageurl) {
        if (imageurl) {
            this.imagesList.push(imageurl);
        }
    }

    this.deleteImage = function (imageUrl) {
        if (imageUrl) {
            this.imagesList.splice(this.imagesList.indexOf(imageUrl), 1);
        }
    }
});