const express = require('express');
const mysql = require('mysql');
const bodyParserv = require('body-parser');
const query = require ('query');
const cors = require('cors');
    
const app=express();

app.use(cors());
app.use (bodyParserv.json());

    const PORT= 5000
    
    var db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Mani@2719",
        database: "world"
      });
      
      db.connect(function(err) {
        if (!err){
        console.log("Connected Data Base!");
            }
         else 
            {
          console.log("Data Base Not Connected");
            }
      });

app.post('/register', async (req,res) => {
    try {
        console.log(req.body)
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let companyname = req.body.companyname;
    let email = req.body.email;
    let contactno = req.body.contactno;
    let servicetype = req.body.servicetype;

    let register = await form(
        firstname,
        lastname,
        companyname,
        email,
        contactno,
        servicetype
      );
      res.status(200).send(register);
    }
    catch (error) {
        res.status(400).send(error);
}
});

form=(firstname,lastname,companyname,email,contactno,servicetype) => {
    return new Promise((resolve,reject)=>{
        var sql =  "INSERT INTO form (firstname,lastname,companyname,email,contactno,servicetype) VALUES (?,?,?,?,?,?)";
    db.query(sql,[firstname,lastname,companyname,email,contactno,servicetype],
            (err,result) => {
                if (err) {
                    console.log(err)
                    return reject({ message: "unexpected error" });
                }
                else {
                    return resolve(result);
                }
            });
        
          });
        }

                        //Home_Screen and Section-1 in products
app.get("/products", (req,res)=> {        
        const products = [
                {
                title: "Graphic Design",
                subTitle: "We Understand A picture is worth a thousand words",
                description: "In today’s fast life people rarely have the batter some system time to read the storys something. The best way to convey something fast is by Graphics. We at Abhishek Graphics understand your idea and turn it into a picture that your customer can relate to.",
                imagePath: "../img/Graphics.jpg"
                },
                {
                title: "Print Media and Communication",
                subTitle: "We Believe “Physical Presence is also needed",
                description: "We all agree that computer has not made paper completely useless, we still use pen and paper and it does not seem to fade away. While Web Site is your online brochure you need to have an offline presence too. This includes Brochures, Banners, Cards, Newspaper Ads, Magazine Ads and much more. Contact the best Graphic Design firm in the country to make your physical presence visible.",
                imagePath: "./img/Print.jpg"
                },
                {
                title: "Web Based Graphic Design",
                subTitle: "We Believe That Good Can Be Made Better",
                description: "It is possible that you already have your website and Backend Application ad campaigns running. So what can we do for you in that case? We can bring your designs to the next level. Maybe you want some new images and theme customization to beautify your online presence or banners or page graphics. Let us create what you have in mind and bring your vision into reality. Our highly skilled and high on tea design team will create something better than you have imagined.",
                imagePath: "./img/Based.jpg"
                },
                {
                title: "UI /UX Design",
                subTitle: "We cherish the idea If you can think about it, there is an App for it.”",
                description: "We at Abhishek Graphics have taken a new step towards UI-UX designing. We combine an advertising  Design Studios can design art and technology to give you a seamless user experience. So if you want your business to have an App, look no further we can design it for you.",
                imagePath: "./img/UI.jpg"
                }
        ]
    res.status(200).send(products);
        })
                        //Home_Screen and Section-2 in text
app.get("/text", (req,res)=> {         
            const text = [
                {
                icon:"1",
                header:"Advertisement Design Service",
                paragraph:"If you currently have or want to an advertising Abhishek Design Studios can design, customize and execute your ads/ad campaigns for you. We can design and implement your Digital Media Ads, Print Media Ads, Magazine Ads, Newspaper Ads and more. We can also provide you with most economically priced printing for your print media ads! Our ad design will let you stand out amongst your competitors as we use the most creative ideas. We use only the latest versions of software of Adobe Photoshop, In Design, Adobe Professional and Illustrator to create your ads."
                },
                {
                icon:"1",
                header:"Creative Logo Design Agency",
                paragraph:"Give your business the right first because you only get one. Logo is your corporate identity. If you're a startup or an enterprise, Logo is a key element. We offer customized services for company logo design that suites Startups, Mid-size companies and Enterprises. If you're not happy with your current logo design and it was done when you started your business and now that you're established you want the logo speak about your success, please get it touch for redefining your logo. If you're looking for logo design in India, USA, Canada. Abhishek Studios is your answer"
                },
                {
                icon:"1",
                header:"Attractive Brochure Design Company",
                paragraph:"We all agree that computer has not made paper completely useless, we still use pen and paper and it does not seem to fade away. While Web Site is your online brochure you need to have an offline brochure too, for walk in clients and to distribute all around the town. Brochures and visual Aids’ are still very important to Marketing and Sales. Any Product / Service cannot have a Marketing & Sales plan without Brochures. We create stunning Brochures / Pamphlets that can capture ones attention. Please engage with us for creating Bi-fold, Tri-fold, Z-fold, C-fold, Booklets and any other corporate brochure design."
                },
                {
                icon:"1",
                header:"Web Graphics and ad Design Service",
                paragraph:"It is possible that you already have your website and ad campaigns running. So what can we do for you in that case? We can bring your designs to the next level. Maybe you want some new images and theme customization to beautify your online presence (do you know what that is?), banners, on page graphics. Let us create what you have in mind and bring your vision into reality. Our highly skilled, and high on tea design team will create something better than you have imagined."
                },
                {
                icon:"1",
                header:"Corporate Identity Design Service",
                paragraph:"Abhishek Graphics offers a range of creative Brand Identity Design services. We believe your Brand is the core of your Business. No matter whether you are a sole owner or a multinational business, it is a critical factor to get right in order to be successful. We offer a wide variety of corporate designs for Coffee Mug, Visiting Cards, Letter Heads, Carry Bags, Laptop Skin Calendars, Note Pads, Diary Design and much more."
                },
                {
                icon:"1",
                header:"Designing Pharmaceuticals Company",
                paragraph:"Illustrative and informative graphics for Pharmaceutical Industry. Get your medicine a catchy graphics and an attractive tagline. In our tenure as a graphic design firm we have worked with several big and small names and designing Ads for Pharma Companies has become our speciality. We provide Visual Aid design too so that you can expressively convince your client."
                }
            ]
    res.status(200).send(text);
        })
                        //Our Works_Screen in Services
app.get("/services",(req,res) => {  
            const services = [
                {
                headerCentre:"Logo Design Package",
                title:"Custom Logo Design Company in India",
                description:"A logo conveys who you are and what your business is all about at the very first instant. As a business logo design company in India, our experienced logo designers know how to deliver a memorable logo that noticeably stands out, ultimately building a unique identity.",
                descriptionOne:"Our logo designs span multiple industries such as real estate, professional services, financial institutions, food and hospitality, Information Technology, Fashion and Apparel, & many more.",
                descriptionTwo:"Our logo design services are available in different packages to suit the needs of every business.",
                imagePath:"",
                button:"Hava a Look @ Our Logo Design Sample & Packages"
                },
                {
                headerCentre:"Brochure Design Package",
                title:"Brochure Design Company in India",
                description:"A brochure is where you flaunt your legacy. It’s like a physical website, where everything is written in golden words and in beautiful designs showcasing the best of your brand. So let’s break the myth structured by brochure design companies that it sells something—no, it positions you!",
                descriptionOne:"We are a brochure design India company providing you with a holistic range of design services. Our design proficiency expands to areas like designing brochures or flyers for marketing, sales, etc. We think that brochure designing is not just about creativity and innovation, but also skillfulness. ",
                descriptionTwo:"Our Brochure design services are available in different packages to suit the needs of every business.",
                imagePath:"",
                button:"Hava a Look @ Our Brouchure Design Sample & Packages"
                },
                {
                headerCentre:"Digital Brochure / Company Profile Package",
                title:"Digital Brochure & Company Profile Design Services",
                description:"An interactive, digital brochure may be unique and inspirational thanks to interacting together with your customers. It’s sort of a PDF brochure, but Mobile Friendly. Making it a strong, engaging, and effective thanks to showcasing your business. E-Brochure is easier to distribute and share.",
                descriptionOne:"Your Online Brochure is often converted from your existing print brochures and catalogs, or are often designed specifically for publishing and sharing online. Digital Brochure & Company Profile Design for Education, Hotel & Restaurant, Pharma Company, Handyman Services, IT Companies, manufacturer, Marketing Team & More.",
                imagePath:"",
                button:"Hava a Look @ Our Digital Brochure Sample & Packages"
                },
                {
                headerCentre:"Company Profile Design Package",
                title:"Corporate Company Profile Design",
                description:"Our company profile design service helps in designing eye-catching profile solutions to design a powerful, detailed, and attractive design for your company online. The company profile of your organisation helps you to stand out from the crowd and spread your message in the most sophisticated and comprehensible manner possible. The company profile designers grasp the nature of the company, its products, and the imagination/ideas of the company.",
                descriptionOne:"A company profile design has to be attractive and eye-catchy for readers to know the company's insights. It briefs you about the organisation and brings forth the nature of the firm.",
                descriptionTwo:"Our Brochure design services are available in different packages to suit the needs of every business.",
                imagePath:"",
                button:"Hava a Look @ Company Profile Design Sample & Packages"
                },
                {
                headerCentre:"Social Media Graphics Package",
                title:"Social Media Graphic Design Services",
                description:"Social media is more popular than ever and we will help your business to get the most out of your online presence. You're a busy businessman, owner or new to business while you know social media is important, you just don't have the time to put in. Branded social media images will help your business through different things like, increase website traffic, increase visibility, and increase that Awesome factor necessary to grow a business.",
                descriptionOne:"We are at Abhishek Graphics help you to give all the solutions for your Social Media Branding like Facebook, Twitter, LinkedIn, Google+, Instagram, Tumble profile pictures, cover page design, wish greeting & marketing/promotional image design. Still, your social media accounts don’t have well-branded graphics? Then directly contact Abhishek Graphics today.  ",
                imagePath:"",
                button:"Hava a Look @ Our Social Media Post Design Sample & Packages"
                },
                {
                headerCentre:"Exhibition Stall Design Package",
                title:"Exhibition Stall Design in India",
                description:"Want to attract people to your product by showing them how awesome it is? Then, organize an exhibition stall that will urge the customers to try your product. Stand apart from others by associating with the best exhibition stall designer in India.",
                descriptionOne:"Abhishek Graphics delivers expert exhibition stall design India with 3d stall designs that will captivate customers. Our exhibition stall design portfolio has proof of our unique ideas that have exceptional exhibition stall design ideas. We provide our services to customers in;",
                descriptionTwo:"Which one is the right one for your company? Considering our team of designers are counted amongst the Abhishek exhibition stall designers, here are some tips to help you take that difficult decision.",
                imagePath:"",
                button:"Hava a Look @ Our Exhibition Stall Design Sample & Packages"
                },
                {
                headerCentre:"Packaging Design Package",
                title:"Leading Packaging Design Company India",
                description:"We're a dedicated branding and packaging design agency in Vadodara, India, with experience of over 31+ years and 3000+ of successful projects ranging from SMEs to India's top brands. In today's era, we believe along with innovation, creativity and functionality the interactive and emotional features also play an essential role in connecting customers' minds.",
                descriptionOne:"We create effective Packaging through impactful and clutter breaking expressions of the brand’s promise and benefits in a consumer-friendly design solution.",
                descriptionTwo:"We are a Product Packaging Design Agency which offers some of the most comprehensive packaging design services in India. Besides being a creative agency, we are also a product packaging design specialist.",
                imagePath:"",
                button:"Hava a Look @ Our Packaging Design Sample & Packages"
                },
                {
                headerCentre:"Indoor-Outdoor Poster / Panel / Hoarding / Wall Graphics Design Package",
                title:"Indoor–Outdoor Advertising Agency India",
                description:"Is your business just starting up? Do you want your business to grow and want everyone to know about it? Think about promoting it with vinyl posters. Although this is an old promotional tool, it is a very effective one. Posters are very efficient in conveying your message clearly and powerfully to the general public.",
                descriptionOne:"These posters enhance the visibility of the product or the message you are trying to convey. In this fast-paced world if there is any way of creating a long-lasting impression then it is through Vinyl posters as it etches the message to your mind forever.",
                descriptionTwo:"Abhishek Graphics Specialize for Creative, Innovative Indoor-Outdoor Poster / Panel / Hoarding / Wall Graphics Design Services.  Advertising still very significant to Marketing and Sales. Every Product / Service cannot have a Marketing & Sales plan without Concept Innovative ADVERTISING.",
                imagePath:"",
                button:"Hava a Look @ Our Indoor-Outdoor Poster Design Sample & Packages"
                },
                {
                headerCentre:"Video Production Package",
                title:"Vidoe Production Company India",
                description:"Tell your story, your way. Whether you need to sell products, inform people, or attract customers, a video is the visual representation of your company’s thoughts and values. Whatever story you want to tell, we have the expertise to bring it to life.",
                descriptionOne:"Creative and Effective Animated Video Solutions Provides Video making Services Explainer Video,  2D Animation Video, Motion Graphics Video, Product Demo Video, Corporate Video & More",
                descriptionTwo:"Our creative and passionate team is committed to making great videos. Whatever your requirements, we are confident that we can customize an animation package to suit your budget.",
                imagePath:"",
                button:"Hava a Look @ Our Video Sample & Packages"
                },
                {
                headerCentre:"Large & Wide Format Design Package",
                title:"Large Format Design Services India",
                description:"LOOKING FOR LARGE OR WIDE FORMAT PRINTING SERVICES? Abhishek Graphics specializes in large signage for businesses, schools, trade shows, conventions, events and more. Signs are a crucial aspect of the company's advertising plan for corporate and retail business. Customized professional signage can build an effect of professional appearance for marketing endeavors.",
                descriptionOne:"Large format design incorporates most types of signage; specifically banners, backdrops, car wraps, window vinyl, foam core on easel and billboards. Its uses can be temporary, re-usable or permanent. They include event production, real estate signs, retail signs, promotion of company vehicles, and construction site signage.",
                descriptionTwo:"No matter the use all materials are durable and weather tested.  Our designers, because of their familiarity with the specific materials and uses, can offer informed suggestions to make sure what looks good on a computer screen will also look good in your application.",
                imagePath:"",
                button:"Hava a Look @ Our Large Format Design Sample & Packages"
                },
                {
                headerCentre:"WhatsApp Invitation Package",
                title:"WhatsApp Invites Design Services India",
                description:"We at Abhishek Graphic Designs in Vadodara, India provide specialized service for WhatsApp cards for all occasions including personal or commercial through a dedicated team of experienced WhatsApp invitation makers.",
                descriptionOne:"The professionally designed WhatsApp invitations are good looking, theme-oriented, more impressive and more memorable. The engagement of our WhatsApp greetings and invitation card specialists for designing an impressive and content enriched invitation save you lots of time and effort.",
                descriptionTwo:"The design and content are created in the line with your liking and preferences like highlighting the special events, event theme, special guests, or venue etc.",
                imagePath:"",
                button:"Hava a Look @ Our WhatsApp Invites Design Sample & Packages"
                },
                {
                headerCentre:"Magazine & Newsletter Design Package",
                title:"Magazine and Newsletter Design Services",
                description:"Local magazines are highly valued and respected publications that build a sense of community among local consumers. In fact, many people turn to local publications as a source of advice, information, entertainment, knowledge, and more. Advertisers can greatly benefit from this credibility when their ads are viewed not as ads but as recommendations from a trusted source.",
                descriptionOne:"Abhishek helps in marketing and promotion with the incredible magazine designs. Hire our Magazine Layout Design services today! Abhishek Graphic Services offers expert magazine design, layout, and production services. We have very good experience in print and advertising design We offer a fixed per-page price for your magazine design, layout, and production services.",
                imagePath:"",
                button:"Hava a Look @ Our Magazine Design Sample & Packages"
                },
                {
                headerCentre:"Web Banner / Social Banner Design Package",
                title:"Web & Social Banner Design Services",
                description:"We design all types of web banners and social media graphics as per our clients’ specifications and requirements, incorporating their company branding and follow all branding guidelines. We design web graphics that are reflective of our clients’ company’s branding in a style that they want so you can say everything we design starts and ends with our clients. They have 100% control over the whole design process.",
                descriptionOne:"we use our banner design methods to promote company visibility across the internet. If you want your company to become more recognized than before, you should rely on our banner design services. If you require a website banner design and Social Media banner, we can provide the best banner design services at affordable costs. We are backed up by a team of expert banner designers who understand your requirements and produce unique and eye-catchy banner designs.",
                descriptionTwo:"Technology has empowered the advertising industry to transform into a variety of different mediums including social media, online promotions, and digital marketing, etc. Abhishek Graphics is a Graphics Design company that has dedicated its services to the propelling of businesses to higher heights. We are the pioneers of the internet marketing industry and it is our utmost desire to satisfy our clients.",
                imagePath:"",
                button:"Hava a Look @ Our Web & Social Banner Design Sample & Packages"
                },
                {
                headerCentre:"Poster Design (Print media) Package",
                title:"Creative Poster Design Services in India",
                description:"Posters are a great way to convey your message. It is the visual appeal of this promotional tool, which contributes to its success. No wonder, posters have always been in vogue, as far as offline marketing is concerned. We, at Abhishek Graphics (Abhishek Branding LLP), are known for creating poster designs for various kinds of businesses. Whether you are launching a new product or service or announcing an event, our poster design services can meet your expectations with full flair.",
                descriptionOne:"Abhishek Graphics is one of the best poster design service providing company. Already you have come across the points for which we are unique in the market not only within nations but internationally also. We don't see whether the company is big or small, all clients are treated with the same importance and gesture.",
                imagePath:"",
                button:"Hava a Look @ Our Poster Design  Sample & Packages"
                }
            ]

res.status(200).send(services);
        })

                    //About_Screen in data
app.get("/data",(req,res) => {    
                const data = [
                    {
                    title: "Our History",
                    description: "We were established in 1990 as a small graphic designing company with the aim of being the best in Vadodara. With the same stride we kept going forward to reach where we are today. We take pride in giving our clients the very best possible solution for their Designing needs and provide great service that fits any budget. We offer a wide range of solutions for nearly any type of business from full brand development to a monthly graphic design and big hoarding design contract.",
                        },                                                                  {
                    title: "Our Present",
                    description: "We not only reached our aim of being the best the Vadodara but also achieved the target of being the best in Gujarat. On our journey we picked up the idea of MAKE IN INDIA and made it our motto. Today we are a part of Make In India campaign and most of our staff and product is produced in India by hardworking Indians. In the year of 2003 we thought to expand our business so we started to work as web developer and some of the supporting service. But our roots still remained in the Graphic Designing business. From 2003 to 2007 mainly we focused upon Indian market and worked with outer state.",
                        },
                        {
                    title: "Our Future",
                    description: "Future is really unpredictable. With the constantly changing demands of the customers one thing is clear that Graphic Designing will play a key role in the coming years. We obviously wish to be the best in the world but still not forget our core roots and move forward with MAKE IN INDIA campaign and with products and services made in India serve the whole world. We invite you to be a part of our future.",
                        }               
                ]

        res.status(200).send(data);
            })
                //About_Screen-2 in content
app.get("/content", (req,res) => {   
            const content =[
                {
                number:"1",
                paragraph:"Abhishek’s innovative marketing campaigns are tailored to suit each customer’s unique requirements, with the same market-leading service for every job, big or small."
                },
                {
                number:"2",
                paragraph:"Our work varies from traditional print display to multi-layered, co-ordinated campaigns comprising word-of-mouth community engagement and themed promotions."
                },
                {
                number:"3",
                paragraph:"Here is a small selection of the innovative, high-profile projects we have delivered for our clients to give an idea of what we can do. But don’t forget – every job is different and your campaign will be created just for you!"
                }
            ]

    res.status(200).send(content);
        })
                 //Contact_Screen in Animation 
app.get("/animation",(req,res)=>{   
                const Animation = [
                    {
                    header:"Registered Office",
                    title: "Abhishek Graphics(A Division of Abhishek Branding LLP)",
                    description: "Abhishek Graphics, Brahmayog Apts, Near Passport Office, Sama Road, Nizampura, Vadodara, Gujarat 390002"
                    },
                    {
                    header:"Abhishek Design House",
                    title: "Abhishek Graphics(A Division of Abhishek Branding LLP)",
                    description: "36 Kadam Nagar, Nizampura, Vadodara - 390024 Gujarat, India"
                    },
                    {
                    header:"Ankleshwar Office",
                    title: "Abhishek Graphics (A Division of Abhishek Branding LLP)",
                    description: "Shaktinagar, Nr Modi NagarAnkleshwar - 393001 Gujarat, India"
                    },
                    {
                    header:"Contact Us",
                    description: "PBX : +91-265-2772211 | +91-99988 21262 | +91-70431 31700 Mobile : +91-937 707 2211 US/CA : +1 (650) 550 9513  Email : info@abhishek.info"
                    },
                    {
                    header:"Office Hours",
                    description: "Mon - Fri:  09:00 AM to 08:00 PM Sat: 09:00 AM to 3:00 PM Sunday closed"
                    }            
                ]

        res.status(200).send(Animation);
            })

app.listen(PORT, () => {
    console.log("SERVER ON:" + PORT)
  });  