// get homepage
exports.homepage=async(req,res)=>{
  
    const locals={
        title:'NodeJs notes',
        description:'free Nodejs notes app'
    };
 
    res.render('index',{
        locals,
        layout:'../views/layouts/front-page'
    });
}

// get about
exports.about=async(req,res)=>{

    const locals={
        title:'about-NodeJs notes',
        description:'free Nodejs notes app'
    };

    res.render('about',locals);
}

//get features
exports.features=async(req,res)=>{

    const locals={
        title:'about-NodeJs notes',
        description:'free Nodejs notes app'
    };

    res.render('features',locals);
}

//get FEQS
exports.faqs=async(req,res)=>{

    const locals={
        title:'about-NodeJs notes',
        description:'free Nodejs notes app'
    };

    res.render('faqs',locals);
}