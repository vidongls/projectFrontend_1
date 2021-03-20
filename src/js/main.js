$(function () {
  $(".women-menu .owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    nav: true,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
  });
  // $(window).scroll(function() {
  //     const position = $(window).scrollTop();
  //     if (position > 200) {
  //         $("header").addClass("fixed");
  //         $(".totop").addClass("fix");
  //     } else {
  //         $("header").removeClass("fixed");
  //         $(".totop").removeClass("fix");
  //     }
  // });
});
$(function () {
  const products = JSON.parse(localStorage.getItem("products")) || [
    {
      id: 1,
      name: "Product Layout",
      price: "412.92",
      brand: "Zara",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Slim_Fit_Cotton_Oxford_Shirt_f8c47cd0-d848-4660-a83f-f232674f7b6a_316x.jpg?v=1570226362",
      category: [
        "womens",
        "new-arrivals",
        "specials",
        "best-sellers",
        "featured-products",
      ],
      option: 1,
      starNumber: 0,
    },
    {
      id: 2,
      name: "Paint-Splatter Fleece Pullover",
      price: "66.27",
      brand: "Zara",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Paint-Splatter_Fleece_Pullover_4f2c0cff-e946-439d-adbe-a5d0d99774e3_230x.jpg?v=1570226453",
      category: ["womens", "new-arrivals", "best-sellers"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 3,
      name: "Pink Pony Leather Sneaker",
      price: "49.71",
      brand: "Zara",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Pink_Pony_Leather_Sneaker_71a9994a-829c-484a-92f5-b6b765b0da7d_230x.jpg?v=1570226456",
      category: ["womens", "new-arrivals", "specials", "best-sellers"],
      option: 0,
      starNumber: 4,
    },
    {
      id: 4,
      name: "Polka-Dot Lightweight Scarf",
      price: "65.86",
      brand: "Lacoste",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Polka-Dot_Lightweight_Scarf_2_c9a0b6ef-4222-4abe-8f2a-2f309dbf41a9_230x.jpg?v=1570226459",
      category: ["womens", "new-arrivals", "specials", "best-sellers"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 5,
      name: "Rae Suede Sandal",
      price: "82.33",
      brand: "Guess",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Rae_Suede_Sandal_33ed1bdb-f45a-4fa7-be40-48700ac622cc_230x.jpg?v=1570226461",
      category: ["womens", "new-arrivals", "specials", "best-sellers"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 6,
      name: "Ralph Coffee Hat",
      price: "98.80",
      brand: "Levi's",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Ralph_s_Coffee_Hat_e5f795d7-eba3-4834-ba51-f52bd8fda361_230x.jpg?v=1570226462",
      category: ["womens", "new-arrivals", "best-sellers", "most-view"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 7,
      name: "Skinny Fit Stretch Mesh Polo",
      price: "16.51",
      brand: "Levi's",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Skinny_Fit_Stretch_Mesh_Polo_eede27e8-6157-4f21-b2f8-a7967bfe1108_279x.jpg?v=1570226548",
      category: ["womens", "new-arrivals", "specials", "featured-products"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 8,
      name: "Reversible Down Vest",
      price: "131.73",
      brand: "Zara",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Reversible_Down_Vest_e4f9c613-d342-416c-b358-0c1202da8bbc_230x.jpg?v=1570226468",
      category: ["womens", "new-arrivals", "best-sellers"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 9,
      name: "Relaxed-Fit Cotton Shirt",
      price: "396.29",
      brand: "Guess",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Relaxed-Fit_Cotton_Shirt_4_230x.jpg?v=1570226530",
      category: ["womens", "specials", "featured-products"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 10,
      name: "Viscose-Cashmere Scarf",
      price: "363.26",
      brand: "Lacoste",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Viscose-Cashmere_Scarf_4_230x.jpg?v=1570226523",
      category: ["womens", "specials", "featured-products"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 11,
      name: "Slim Fit Cotton Oxford Shirt",
      price: "412.80",
      salePrice: "0",
      brand: "Levi's",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Slim_Fit_Cotton_Oxford_Shirt_f8c47cd0-d848-4660-a83f-f232674f7b6a_316x.jpg?v=1570226362",
      category: ["womens", "specials", "featured-products"],
      starNumber: 0,
      option: 1,
    },
    {
      id: 12,
      name: "Slim Fit Cotton Oxford Shirt",
      price: "115.58",
      brand: "Gap",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Relaxed_Painted_Oxford_Shirt_a05b7822-2e2f-40da-986f-4bcd650ba584_230x.jpg?v=1570226466",
      category: ["womens", "new-arrivals", "best-sellers"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 13,
      name: "Woven Shield Sunglasses",
      price: "115.58",
      brand: "Levi's",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Woven_Shield_Sunglasses_3890188c-15a3-459b-94c3-4e46e2149215_230x.jpg?v=1570226490",
      category: ["womens", "most-view"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 14,
      name: "The Ricky Mirrored Sunglasses",
      price: "247.68",
      brand: "Polo",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/The_Ricky_Mirrored_Sunglasses_313241c4-d420-4b39-a221-f55108b07db5_148x.jpg?v=1570226483",
      category: ["womens", "most-view"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 15,
      name: "Silk Polka-Dot Scarf",
      price: "181.63",
      brand: "Guess",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Silk_Polka-Dot_Scarf_1_f66f3a7e-50c3-43d8-897d-1fb0be242284_148x.jpg?v=1570226474",
      category: ["womens", "most-view"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 16,
      name: "Saffiano Leather Belt",
      price: "165.12",
      brand: "Lacoste",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Saffiano_Leather_Belt_013384fb-f4ca-425a-9865-1a9c0db0f802_148x.jpg?v=1570226472",
      category: ["womens", "most-view"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 17,
      name: "Rounded Cat Eye Sunglasses",
      price: "148.61",
      brand: "Polo",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Rounded_Cat_Eye_Sunglasses_f1da40e7-625e-4361-ba65-66e597145a06_148x.jpg?v=1570226470",
      category: ["womens", "most-view"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 18,
      name: "Wimbledon Cross Court Cap",
      price: "346.75",
      brand: "Levi's",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Wimbledon_Cross_Court_Cap_d320c1e5-2530-4eb7-9cce-fceef14b2fa8_148x.jpg?v=1570226419",
      category: ["womens", "most-view"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 19,
      name: "Vachetta Sahara Duffel Bag",
      price: "297.22",
      brand: "Levi's",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Vachetta_Sahara_Duffel_Bag_f192f146-f7a0-4d4e-a453-89fa116f9cd0_148x.jpg?v=1570226414",
      category: ["womens", "most-view"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 20,
      name: "Heritage Sunglasses",
      price: "132.10",
      brand: "Zara",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Heritage_Sunglasses_62cec630-27d4-44ed-af76-707495d3a98e_148x.jpg?v=1570226392",
      category: ["womens", "most-view"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 21,
      name: "Douglas Calfskin Buckle Belt",
      price: "99.07",
      brand: "Levi's",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Douglas_Calfskin_Buckle_Belt_28748ea1-66d5-4ed6-bfb4-15fab63f00af_148x.jpg?v=1570226388",
      category: ["womens", "most-view"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 22,
      name: "East Hampton Fleece Hoodie",
      price: "363.26",
      brand: "Gap",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Featherweight_Pima_Hoodie_4_e2b11fbc-2853-488d-a075-f8bf63034128_148x.jpg?v=1570226424",
      category: ["womens", "featured-products"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 23,
      name: "Faxon Canvas Low-Top Sneaker",
      price: "379.78",
      brand: "Zara",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Faxon_Chambray_Low-Top_Sneaker_Featured_148x.jpg?v=1570226431",
      category: ["womens", "featured-products"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 24,
      name: "Raxon Chambray Low-Top Sneaker",
      price: "396.29",
      brand: "Polo",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Faxon_Canvas_Low-Top_Sneaker_1_8a94289f-c9c8-4e47-afa1-c436717fc271_148x.jpg?v=1570226439",
      category: ["womens", "featured-products"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 25,
      name: "Plaid Cotton Oxford Shirt",
      price: "16.51",
      brand: "Levi's",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Plaid_Cotton_Oxford_Shirt_8_a45b2d4e-994e-4ffe-9909-04331f601478_148x.jpg?v=1570226447",
      category: ["womens", "featured-products"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 26,
      name: "Premier Cropped Skinny Jean",
      price: "313.73",
      brand: "Gap",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Premier_Cropped_Skinny_Jean_13_8d64f29d-9ef1-4cb1-9fa6-6193c913ccd0_148x.jpg?v=1570226505",
      category: ["womens", "featured-products"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 27,
      name: "Tailored Fit Mesh-Panel Polo",
      price: "330.24",
      brand: "Zara",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Tailored_Fit_Mesh-Panel_Polo_4_fba54f8e-368e-4537-92ff-03fef8a6c09c_148x.jpg?v=1570226512",
      category: ["womens", "featured-products"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 28,
      name: "Tailored Fit Mesh-Panel Polos",
      price: "346.75",
      brand: "Polo",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Tailored_Fit_Polo_Shirt_4_fbb62c6f-e20f-4e08-9b0d-ca08b7d1f792_148x.jpg?v=1570226519",
      category: ["womens", "featured-products"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 29,
      name: "Hampton Straight-Fit Jean",
      price: "114.17",
      brand: "Gap",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Hampton_Straight-Fit_Jean_86a12e62-fe99-4e26-839b-30b36d34bbf0_158x.jpg?v=1570226390",
      category: ["mens", "mens-new-arrivals"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 30,
      name: "Heritage Sunglasses",
      price: "130.48",
      brand: "Zara",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Heritage_Sunglasses_62cec630-27d4-44ed-af76-707495d3a98e_158x.jpg?v=1570226392",
      category: ["mens", "mens-new-arrivals"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 31,
      name: "Ocean Wash Linen Sport Shirt",
      price: "179.42",
      brand: "Guess",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Ocean-Wash_Linen_Sport_Shirt_bf3d7287-c8bf-458e-bd19-8d583a4760d6_158x.jpg?v=1570226395",
      category: ["mens", "mens-new-arrivals"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 32,
      name: "Packable Jacket",
      price: "195.73",
      brand: "Levi's",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Packable_Jacket_4_ec2daea3-368e-4d00-afb5-eee718d165a7_158x.jpg?v=1570226399",
      category: ["mens", "mens-new-arrivals"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 33,
      name: "Performance Jersey T-Shirt",
      price: "212.04",
      brand: "Gap",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Performance_Jersey_T-Shirt_816a4590-aaad-439c-8da3-3202db510010_158x.jpg?v=1570226402",
      category: ["mens", "mens-new-arrivals"],
      option: 0,
      starNumber: 5,
    },
    {
      id: 34,
      name: "Prima Cotton Sweater",
      price: "228.35",
      brand: "Zara",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Pima_Cotton_Sweater_393ba8d0-a0fd-4b7c-8f4e-838818720a5c_158x.jpg?v=1570226404",
      category: ["mens", "mens-new-arrivals"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 35,
      name: "Custom Fit Soft-Touch Polo",
      price: "65.24",
      brand: "Lacoste",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Custom_Fit_Soft-Touch_Polo_2_6911facc-a20c-4583-9715-d6a5381a9806_158x.jpg?v=1570226386",
      category: ["mens", "mens-new-arrivals"],
      option: 0,
      starNumber: 0,
    },
    {
      id: 36,
      name: "Douglas Calfskin Buckle Belt",
      price: "97.86",
      brand: "Levi's",
      image:
        "https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Douglas_Calfskin_Buckle_Belt_28748ea1-66d5-4ed6-bfb4-15fab63f00af_158x.jpg?v=1570226388",
      category: ["mens", "mens-new-arrivals"],
      option: 0,
      starNumber: 0,
    },
  ];
  $(".women-products .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });
  $(".men-products .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 7,
      },
    },
  });
  const allCategory = $(".women-products .category a");
  for (let i = 0; i < allCategory.length; i++) {
    if ($(allCategory[i]).hasClass("active")) {
      const category = $(allCategory[i]).data("category");
      const activeProducts = products.filter((val) =>
        val.category.includes(category)
      );
      renderOwl(activeProducts, ".women-products .owl-carousel");
    }
  }
  $(".women-products .nav-items .category a").click(function (e) {
    e.preventDefault(); // loai bo su kien mac dinh
    $(".women-products .nav-items .category a").removeClass("active");
    $(this).addClass("active");
    // lay category
    const category = $(this).data("category");
    const filterProducts = products.filter((val) =>
      val.category.includes(category)
    );
    removeOwl(products);
    renderOwl(filterProducts, ".women-products .owl-carousel");
  });

  //men-product render
  const allCategoryMen = $(".men-products .category a");
  for (let i = 0; i < allCategoryMen.length; i++) {
    if ($(allCategoryMen[i]).hasClass("active")) {
      const category = $(allCategoryMen[i]).data("category");
      const activeProducts = products.filter((val) =>
        val.category.includes(category)
      );
      renderOwl(activeProducts, ".men-products .owl-carousel");
    }
  }
  $(".men-products .nav-items .category a").click(function (e) {
    e.preventDefault(); // loai bo su kien mac dinh
    $(".men-products .nav-items .category a").removeClass("active");
    $(this).addClass("active");
    // lay category
    const category = $(this).data("category");
    const filterProducts = products.filter((val) =>
      val.category.includes(category)
    );
    removeOwlMen(products);
    renderOwl(filterProducts, ".men-products .owl-carousel");
  });
  // cart

  $(".cart-content a").click(function (e) {
    e.preventDefault();
  });
  $(".cart").click(function (e) {
    e.preventDefault();
    $(".cart-layout").toggle(100);
    // $(".cart").addClass("active");
    // const checkCart = document.getElementsByClassName("cart-layout");
    // if (checkCart.toggle()) {
    //     $(".cart-layout").fadeOut();
    // }
  });
  let arrCart = [];
  $(".addCart").click(function (e) {
    e.preventDefault();
    let id = $(this).data("cartid");
    const item = products.find((val) => val.id === id);
    arrCart = [...arrCart, item];
    console.log(arrCart)
    localStorage.setItem("cart", JSON.stringify(arrCart));
  });
  $("#show").click(function (e) {
    e.preventDefault();
    const local = localStorage.getItem("cart");
    const carts = JSON.parse(local);
    renderCart(carts);
  });
  $(".cart-content").on("click", ".itemClose", function (e) {
    e.preventDefault();
    let id = $(this).data("productsid");
    // tim vi tri xuat hien dau tien cua thang co id ma muon delete
    // let index = arrCart.find((val) => val.id === id);
    
    // luu vao localStorage
    // JSON.stringify -> chuyen object -> string
    const local = localStorage.getItem("cart");
    const carts = JSON.parse(local);
    const index = carts.findIndex((val) => val.id === id);
    carts.splice(index,1)
    localStorage.setItem("cart", JSON.stringify(carts));

    renderCart(carts);
  });
  //Showtt
  let arrCartTam = [];
  let nhet = [];
  // $(".addCart").click(function (e) {
  //   e.preventDefault();

  // });

  // $(".addCart").click(function (e) {
  //   e.preventDefault();
  //   // $(".modal").show(); // display: block
  //    // display: block + opacity
  //   let id = $(this).data("cartid");
  //   const item = products.find((val) => val.id === id);
  //   arrCart = [...arrCart, item];
  //   localStorage.setItem("cart", JSON.stringify(arrCart));
  // });
  $(".addCart").click(function (e) {
    e.preventDefault();
    let id = $(this).data("cartid");
    const item = products.find((val) => val.id === id);
    arrCartTam = [...arrCartTam, item];
    localStorage.setItem("cartTam", JSON.stringify(arrCartTam));
    const local = localStorage.getItem("cartTam");
    const carts = JSON.parse(local);
    const item2 = carts.find((val) => val.id === id);
    nhet = [...nhet,item2]
    
    // let index = arrCartTam.findIndex((val) => val.id === id);
    //  console.log(index)
    renderCartTam(nhet);
    nhet= [];
    $(".modal").fadeIn();
    let tongtien 
    let dongia = +document.querySelector('#dongiaTam').textContent;
    let sl = +document.querySelector('.soluongTam').textContent;
    tongtien = dongia*sl
    document.querySelector('#tongtienTam').innerHTML = tongtien;
    console.log(tongiten);
  });

  // $(".close-modal").click(function(e) {
  //   e.preventDefault();
  //   console.log("fdsfdsf")
  //   // $(".modal").hide();
  //   $(".modal").fadeOut();
  // });
  // $('.modal-wrapper').click(function(event){
  // });
  // $(".modal").on("click",".modal-content", function (e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  // });

  $(".modal-wrapper").on("click", ".close-modal", function (e) {
    // $(".modal").hide();
    $(".modal").fadeOut();
    e.stopPropagation();
  });
  $(".modal").click(function (e) {
    console.log("sadsad");
    var container = $(".modal-wrapper");
    // Nếu click bên ngoài đối tượng container thì ẩn nó đi
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".modal").fadeOut();
    }
  });
});
function renderCartTam(products) {
  $(".modal .modal-wrapper").empty();
  products.map((val) => {
    $(`
    <div class="modal-content">
        <div class="modal-header">
          <button class="close-modal">
              <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="message-title">
                      <i class="fas fa-check"></i> Added to cart successfully!
                    </div>
                    <div class="tt-sp">
                        <img src="${val.image}" alt="">
                        <h2>Ralph Coffee Hat</h2>
                        <div class="tt-qty">QTY: <span class='soluongTam'>1</span></div>
                    </div>
                    <div class="totalPrice">
                        Total:
                        <span class='tt-price'>€</span> <span id='dongiaTam' class="tt-price">${val.price}</span>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="tt-addCart">
                      <a href="">
                        There are <span class="total-sp">1</span>
                        items
                        <br>
                        in your cart
                       <div class="ttPricecart">
                         TOTAL:
                         <span class='tt-gia'>€</span><span id='tongtienTam' class="tt-gia"></span>
                       </div>
                      </a>
                    </div>
                    <a class="btn-continue">
                      CONTINUE SHOPPING
                    </a>
                    <a class="btn-view">VIEW CART</a>
                    <div class="checkTems">
                      <input id="checkboxTems" type="checkbox" value="1">
                      <label for="checkboxTems">
                        <span class="check"></span>
                        <span class="box"></span>                        
                           I agree with the terms and conditions
                      </label>
                    </div>
                    <a href="" class="checkOut">PROCEED TO CHECKOUT</a>
                </div>
            </div>
        </div>
      </div>
      `).appendTo(".modal .modal-wrapper");
  });
}
function renderCart(products) {
  $(".cart-content ul").empty();
  products.map((val) => {
    $(`
    <li class="flex">
    <div class="tt-img"><img src="${val.image}" alt="">
    </div>
    <div class="tt-itemCart">
     <div class="tt-title">
         <h2>${val.name}</h2></div>
     <div class="tt-sl">
        <span class="giaca">1</span>
        X
     </div>
     <div class="tt-price">
         <span>${val.price}</span>
     </div>
    </div>
    <div data-productsid=${val.id} class="itemClose">
      <i class="far fa-trash-alt"></i>
    </div>   
 </li>

      `).appendTo(".cart-content ul");
  });
}
function removeOwl(products) {
  for (let i = 0; i < products.length; i++) {
    $(".women-products .owl-carousel")
      .trigger("remove.owl.carousel", [i])
      .trigger("refresh.owl.carousel");
  }
}
function removeOwlMen(products) {
  for (let i = 0; i < products.length; i++) {
    $(".men-products .owl-carousel")
      .trigger("remove.owl.carousel", [i])
      .trigger("refresh.owl.carousel");
  }
}
function renderStars(num) {
  const star =
    '<li><a><i style="color:#ffb503" class="fas fa-star"></i></a></li>';
  let res = "";
  for (let i = 0; i < num; i++) {
    res += star;
  }
  return res;
}
function renderOwl(list, selector) {
  // dao nguoc 1 array bang .reverse()
  list.reverse().map((val, index) => {
    // remove all item in owl
    // add list san pham vao owl
    $(selector)
      .trigger("add.owl.carousel", [
        ` 
                <div class="item col-md-4 col-xs-12 col-sm-6">             
                    <a class="item-images" href="">
                        <img src="${val.image}" alt="">
                    </a>
       
                    <div class="item-description">
                        <div class="rating">${val.brand}
                            <ul class="flex a-center i-center">
                            ${
                              val.starNumber
                                ? renderStars(val.starNumber)
                                : `
                                <li><a href=""><i class="far fa-star"></i></a></li>
                                <li><a href=""><i class="far fa-star"></i></a></li>
                                <li><a href=""><i class="far fa-star"></i></a></li>
                                <li><a href=""><i class="far fa-star"></i></a></li>
                                <li><a href=""><i class="far fa-star"></i></a></li>
                            `
                            }                             
                            </ul>     
                        </div>
                        <h2><a href="">${val.name}</a></h2>
                        <span class="price-products">${val.price}</span>
                         <div class="options-boxs flex a-center i-center row">
                         ${
                           val.option
                             ? ` <ul class="option-item it1 flex col-xs-12 col-sm-12">
                              <li class="acitver">
                                  <a href=""><img src="https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Slim_Fit_Cotton_Oxford_Shirt_4_3cd52a35-5462-4b28-8e48-c5f6904f524a_100x.jpg?v=1570226362" alt="" srcset=""></a>
                              </li>
                              <li>
                                  <a href=""><img src="https://cdn.shopify.com/s/files/1/0031/6604/4224/products/Slim_Fit_Cotton_Oxford_Shirt_f8c47cd0-d848-4660-a83f-f232674f7b6a_100x.jpg?v=1570226362" alt=""></a>
                              </li>
                          </ul>
                          <ul class="option-item option-2 flex col-xs-12 col-sm-12">
                              <li class="option-2-active">
                                  <a href="">S</a>
                              </li>
                              <li>
                                  <a href="">M</a>
                              </li>
                              <li>
                                  <a href="">L</a>
                              </li>
                          </ul>
                          <ul class="option-item option-3 flex col-xs-12 col-sm-12">
                              <li class="acitver">
                                  <a href=""><img src="https://cdn.shopify.com/s/files/1/0031/6604/4224/t/2/assets/filter_color1.png?v=2012429371859742147" alt="" srcset=""></a>
                              </li>
                              <li>
                                  <a href=""><img src="https://cdn.shopify.com/s/files/1/0031/6604/4224/t/2/assets/filter_color2.png?v=7136056077559859965" alt=""></a>
                              </li>
                              <li>
                                  <a href=""><img src="https://cdn.shopify.com/s/files/1/0031/6604/4224/t/2/assets/filter_color3.png?v=844303991436309949" alt=""></a>
                              </li>
                          </ul>`
                             : ""
                         }
                        </div>    
                                    
                        <div class="button-basket">
                            <button class="addCart" data-cartid=${val.id}>
                                <i class="fas fa-shopping-basket"></i>
                                <span> ADD TO CART</span>
                            </button>
                        </div>
        
                    </div>
                    <div class="right-hand">
                        <ul>
                            <li class= "active"><a href=""><i class="far fa-eye"></i></a></li>
                            <li><a href=""><i class="far fa-heart"></i> </a></li>
                            <li><a href=""><i class="fas fa-compress-alt"></i></a></li>
                        </ul>
                    </div>
               
            </div>
             `,
        index,
      ])
      .trigger("refresh.owl.carousel");
  });
}
$(function () {

});