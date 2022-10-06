# Project 3 - Travel Library 




## Project Overview

A ten-day, group project where we used JavaScript, NodeJS, React, MongoDB, Express, Mongoose, Axios, CLI, SCSS, Insomnia, Cloudinary and AWS S3. To make an API that connects to the frontend and has CRUD functionality. We all shared our parts in making a travel review website. I worked on the API and Mongoose model and connection, styling, Cloudinary, Bootstrap and refactoring code so it can work on mobile devices. 


## Deployment

You will find the completed project here: https://sei65-destinations.netlify.app/

Please feel free to log in using the following credentials:
email: user
password: 1234

## Code Installation:

Clone or download the repo then in your Terminal run the following commands:

* Install dependencies npm i
* Start the database mongodb npm run seedDb
* Start the backend server using nodemon npm start
* Change into frontend folder cd frontend
* Run the frontend npm run start

![travel-screenshot](./img/screenshots/image4.png)



## The Brief

* Build a full-stack application by making your backend and your frontend
* Use an Express API to serve your data from a Mongo databas
* Consume your API with a separate frontend built with React
* Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
* Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
* Be deployed online so it's publicly accessible.

## Technologies used:

### Front end:
* React
* SCSS
* Axios
* Nodemon
* React Router Dom
* React Responsive Carousel

### Back end:
* Node.js
* MongoDB
* Express
* Bcrypt
* Mongoose
* Jsonwebtoken
* AWS
* Cloudinary

### Dev Tools:
* VS code
* NPM
* Insomnia
* Git
* GitHub
* Google Chrome dev tools
* Excalidraw (Wireframing)
* Heroku (deployment)
* Google Drive -Share Folder (Images, files and documents)
* Excalidraw (Wireframing)
* Netlify (deployment)

## The Approach Taken: 

### Day 1 - Planning

The first step was to plan the routes, models and controllers we would need to make sure the app would function how we planned. We started with the destination model and the user model and then added the review model. After this, we created a basic wireframe for the look of each page and how the users will navigate through the app.

Wireframe: 
![travel-screenshot](./img/screenshots/image10.png)




We then put drew up our MVP and goals, including how to divide the workload amongst ourselves. Communication was done through Zoom and Slack with google drive to keep on top of the project. This was particularly useful as we were in different time zones. We each wanted an equal share in creating both the backend and frontend. For the backend, I worked on the Mongoose database, seeding data and middleware.

As a group that we would run a daily morning stand-up to discuss any issues we were having. For all of us, this was our first time usig GitHub, so we decided to spend the start of each day doing pushes and pulls as a group. This was to avoid and fix any potential merging conflicts that we would encounter.


### Day 2 - Backend and Starting the frontend

In addition to the above methods of communication, we used Trello to plan our responsibilities.  I worked on partly connecting to the Mongoose database. I also made the middleware, routes and controllers. We did have some issues dealing with merge conflicts at the beginning of each day, as we all wanted to work on the API at the same time and it did take a vast majority of the day to sort out these conflicts. This wasn’t ideal and it limited how much work we wanted to complete in a day. We decided on Zoom that we should assign and limit tasks on Trello. So I did the seeding data and helped construct some of the models for it.
 
As a team, we decided that it might be wise to deploy it at the end of day two using Heroku, as we might have problems closer to the deadline. We were successful in deploying the API, one of the biggest hurdles was completed and we are now able to focus on the frontend and slowly update the API when needed.
 
Our secondary aim was to ensure all of the end-points were working properly which were tested with Insomnia. Both to make sure the backend was receiving the correct authorisations and sending the correct responses with the various HTTP methods. This was done with the combination of insomnia and using the local host.
 
We spent the majority of our time collecting the data for the travel hub inputting the relevant data and using google drive to share images, documentation and other documentation such as env information and the secret word for JSON Web Token.



## Day 3 - 7 - Frontend

### Day 3

On the 3rd Day: 
We went back to Trello and Zoom to discuss the next part of our project. We decided to focus on the frontend. Using the wireframe as a guide we started blocking in the essential requirements for the frontend. We discussed were the opening page and how the user would navigate from one page to another. We also wanted to discuss how the layout would look and I suggested following the wireframe and implementing any changes if need be.
 
After our discussion, I started on the landing, destination and single destination pages. Using Axios we were able to test the API locally and using various JavaScript map and filter methods we were able to display the images and the description on the frontend. I also worked partly on the CSS and bootstrap as styling was an important part of the project. I asked the team if we could use temporary images to block out the frontend and by using the React-Bootstrap Card which provides a flexible and extensible content container with many variants and options, these include images. Giving us a solid framework to work on. 



### Day 4

On the 4th day, we discussed the next part of the project. Kate worked more on the backend and started using AWS S3 to host the images. We got rid of any temporary images and started to use the hosted images in the backend. Since we made significant changes, we discussed as a team on Zoom about git pushing and pulling. We hoped to avoid any serious merge conflicts. After we pulled the database, we re-seed the database and were able to view all the hosted images on the frontend.

 

### Day 5 - Register, login and authorization

On the 5th day was the user interface, having the user log in, register and log out was one of the core requirements. Again, we spent our time chatting on Zoom and delegating tasks on Trello. We discussed issues we were having and how to resolve them as a team. We started each day with git pull and dealt with any merge conflicts if there were any. After discussing with the team I wanted to work on the user interface. This was one of the biggest components of the project. Our primary goal was to make a user who can register, log in and log out.
 
By using insomnia, I could see if the register and login endpoints were working and if it was producing a JSON Web Token (JWT). This was to identify the user. I created an environment variable to hold the SECRET-WORD to decrypt the token. By creating a new file called auth in the frontend. I needed to store the token in local storage, get the token, split the token and then decrypt the token. After this, we were able to identify the user and check if the user is valid.


### Day 6 - Register, login and authorization

With the registration, login and authorisation completed, we went back to Zoom and Trello. I updated the Team on my progress and moved to the review segment (I wanted peer feedback). I created a new component called ‘review’ and this was a review form for the individual destination. I created an Axios request which links to the database. I used Hooks to hold the review and setReview as an empty string. Then I created a handle submit event which holds Axios post requests. Inside the function, it will hold the headers and the authorization of the user’s token. 

I then matched the API request with the destination ID. I used useParams which returns an object of key/value pairs of the dynamic params from the current URL that was matched by the route path. This was done by routing it through the App.js file.


```Javascript
    // Add review
const handleSubmit = async (event) => {
  event.preventDefault()
  try {
    const { data } = await axios.post(`${API_URL}/travel/${destinationId}`, review, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      },
    })
    console.log(data)
    navigate(`/travel/${destinationId}`)
  } catch (error) {
    console.log(error)
    setErrors(error)
  }
}
```



### Day 7 - Using Cloudinary to upload profile images: 

On the 7th day, the last part is to get the profile image working. I used Cloudinary to enable users to upload, store, manage, manipulate, and deliver images and videos for websites and apps. I made a function so that the user could upload their image to Cloudinary. By setting a default profile image the user will be able to upload a new image using Hooks by replacing the uploaded image with the image stored in the cloudinary account. 

```Javascript
    // Upload to Cloudinary
  const uploadImage = async (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('file', imageSelect)
    formData.append('upload_preset', 'djssiss0') //? djssiss0 is the key + danedskby is the name 
    const { data } = await axios.post('https://api.cloudinary.com/v1_1/danedskby/image/upload', formData)
    // ! this is my (serhan miah) login for the cloudinary - for destination images
    setNewProfileImg(data.url)
    setUpdatedUserProfile({ ...updatedUserProfile, profileImg: data.url })
  }

```


## Travel Library Pages AllDestination, Single page and adding review images

For Travel Library there was a lot more complexity to each page. We wanted to add new features to the app including user registration, login and the ability to update the user profile. We also wanted the user to add and review their own destinations. I added the image gallery and ensured that each destination was clickable when the user selected a destination. I also focused on individual pages where the user could write a review. 


All Destionation in the frontend
![travel-screenshot](./img/screenshots/image20.png)


```Javascript
    // JS map with all the destination 
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import API_URL from '../config.js'
import Spinner from './Spinner.js'


const AllDestination = () => {

const [ destinationData, setDestinationData ] = useState([])
const [ errors, setErrors ] = useState(false)
useEffect(() => {
  const getData = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/travel`)
      setDestinationData(data)
    } catch (error) {
      setErrors(error.message)
      console.log(error.message)
    }
  } 
  getData()
}, [])


  return (
    <>
    { destinationData[0] ?
    <div className='all-destination-page'>
      <Container as="main" className='destination-index'>
      <h1 className='text-center mb-4'>All Destinations</h1>
      <Row className='destination-row'>
        { destinationData.map(item => {
            const { _id } = item
            return (
              <Col key={_id} md="5" lg="4" className='mb-4'>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/travel/${_id}`}>
                  <Card >
                    <Card.Img className='card-images' variant='top' src={item.imgUrl[0]}></Card.Img>
                    <Card.Body className='bg-light'>
                      <Card.Title className='multi-card text-center mb-0 text-decoration-none'>{item.name} - {item.country}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            )
          })
        }
      </Row>
    </Container>
    </div>
    :
    <h2 className="text-center">
      { errors ? 'Something went wrong. Please try again later' : <Spinner />}
    </h2>
      }
  </>
  )
}


export default AllDestination
```

```Javascript
    // Single destination useEffects
useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/travel/${destinationId}`)
        setDestination(data)
      } catch (error) {
        setErrors(error.message)
        console.log(error.message)
      }
    }
    getData()
  }, [destinationId, reviewsRemoved])

```

```Javascript
    // JSX Map conditional 
 return (
    <div className='destination-page'>
      <Container as="main">
        { destination ? 
          
          <div className="kitchen-sink">
            <h1>{destination.name}</h1>
            <Card border="dark" className="destination-card bg-transparent">
              <CarouselImages />
              <Card.Body className="bg-light-gray">
                <Card.Title className="single-card">{destination.name}</Card.Title>
                <Card.Text>
                  {destination.description}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Country: {destination.country}</ListGroup.Item>
                {/* <ListGroup.Item>Rating: {destination.rating}</ListGroup.Item>
                <ListGroup.Item>Activities: {destination.activities}</ListGroup.Item> */}
              </ListGroup>
            </Card>
              <Container as='section' className='review-card'>
                  <h3>Reviews</h3>
                  { destination.reviews.length > 0
                    ?
                    destination.reviews.map(review => {
                      const { destinationId, reviewId, reviewText, rating, displayName, reviewImgUrl, activities } = review
                      return (                       
                        <Card key={reviewId} className="re-card">
                            <Card.Img variant='top' src={reviewImgUrl[0] ? reviewImgUrl[0] : 'https://sei65-destinations.s3.eu-west-1.amazonaws.com/users/default-image.jpg' }></Card.Img>
                            <Card.Body>      
                              <Card.Text>
                                {reviewText}
                              </Card.Text>  
                                <ListGroup className="list-group-flush">
                                  <ListGroup.Item><span>👤</span> {displayName}</ListGroup.Item>
                                  <ListGroup.Item>Rating: {rating}</ListGroup.Item>
                                  <ListGroup.Item>Activities: {activities.join(', ')}</ListGroup.Item>
                                </ListGroup>       
                              { userIsOwner(review) &&              
                              <div className="buttons mb-4">
                                <Button variant="danger" onClick={event => deleteReview(event, destinationId, reviewId)}>Delete</Button>
                                <Link to={`/edit-review/${destinationId}/${reviewId}`} className='btn btn-primary'>Edit Review</Link>
                              </div>  
                              }                         
                            </Card.Body>
                          </Card>          
                        )
                    })
                    :
                    <>
                      { errors ? <h2>Something went wrong. Please try again later</h2> : <p>No reviews yet</p>}
                    </>
                  }
              </Container>
            { userIsAuthenticated() ? 
              <Link to={`/review/${destinationId}`}>
                <button className='back-button btn btn-primary'>Add a review</button>
              </Link>
              :
              <Link to={'/'}>
                <button className='btn btn-primary'>Login to add a review</button>
              </Link>
}               
          </div>
          :
          <h2 className="text-center">
            { errors ? 'Something went wrong. Please try again later' : <Spinner />}
          </h2>
        } 
        <Link to="/travel" className='back-button btn btn-primary'>Back to all destinations</Link>
      </Container>
    </div>
  )
```

![travel-screenshot](./img/screenshots/image19.png)

The MVP for this project was completed by the end of day 7. On day 8, we wanted to make the front end to be more appealing. All of us wanted to contribute to the frontend. I started working on the individual destination page by using a react-bootstrap. After getting feedback from my team. I used the Card bootstrap called kitchen sink which gave a more grided approach to how information was displayed. I kept the design simple and stuck to the wireframe when making any design choices.
 
Once the design was done, I started to work on the review component. I wanted the user to upload their image when making a review. I again used Cloudinary to upload an image. I created a function called upload images which triggers an event. The main feature of Cloudinary was for the user to store the image and return an image URL.

Code Snippet on the review 

```Javascript
    // Again using Cloudinary for media content
const uploadImage = async (event) => {
  event.preventDefault()
  const formData = new FormData()
  formData.append('file', reviewImg)
  formData.append('upload_preset', 'djssiss0') //? djssiss0 is the key + danedskby is the name 
  const { data } = await axios.post('https://api.cloudinary.com/v1_1/danedskby/image/upload', formData)
  // ! this is my (serhan miah) login for the cloudinary - for destination images
  setReviewImg(data.url)
  setReview({ ...review, reviewImgUrl: [ data.url ]})
}
```

How Cloudinary is store
![travel-screenshot](./src/img/screenshots/image18.png)


```Javascript
    // Using Hooks in Cloudinary for updating the image.
const navigate = useNavigate()
const { destinationId } = useParams()
const [ review, setReview ] = useState('')
const [ reviewImg, setReviewImg ] = useState('')
const [ errors, setErrors ] = useState(false)
```

Front end review page
![travel-screenshot](./img/screenshots/image5.png)


Front end result page
![travel-screenshot](./img/screenshots/image1.png)



## Travel Library - React Form Pages

The profile, edit profile, review, and edit review pages were made with React component Form and with a few additional features of Cloudinary cloud server. Since most of our functionality was using a Form, I spent the last few days making sure it would support the react framework and provide a sleek design ready for mobile devices.

```Javascript
    // React Bootstrap Form.
<Form className="edit-review-form" onSubmit={handleSubmit}>
          <h1>Edit Review</h1>
          <Card key={reviewId} className="edit-review-card">
            <Card.Img variant='top' src={review.reviewImgUrl[0] ? review.reviewImgUrl[0] : 'https://sei65-destinations.s3.eu-west-1.amazonaws.com/users/default-image.jpg' }></Card.Img>
            <Card.Body>
              <Card.Title className='text-center mb-0'>{/*{reviewText}*/}</Card.Title>
              <Card.Text>
                {review.reviewText}
                <Form.Label htmlFor="reviewText">Review Text</Form.Label>
                <Form.Control as="textarea" rows={4} name="reviewText" placeholder="Edit review text" value={updatedReview.reviewText} onChange={handleChange} />
              </Card.Text>  
              <ListGroup className="list-group-flush">
                <ListGroup.Item><span>👤</span> {review.displayName}</ListGroup.Item>
                <ListGroup.Item>Rating: {review.rating}</ListGroup.Item>
                <Form.Control type="number" name="rating" placeholder="Edit rating" value={updatedReview.rating} onChange={handleChange} />
                <ListGroup.Item>Activites: {review.activities.join(', ')}</ListGroup.Item>
                <textarea name="activities" placeholder="Edit activities" value={updatedReview.activities} onChange={handleChange} ></textarea>
              </ListGroup>
              { newReviewImg ? 
              <img className='w-100' src={newReviewImg} alt={'User Uploaded Review'} />
              :
              <></>
```



Front end review Form 
![travel-screenshot](./img/screenshots/image5.png)


## Day 9 & 10 - Styling tweaks with my teammates

Days 8 & 9 were spent mostly on styling and adding the correct fonts, background and the whole feel of the website. Chris and I worked closely to ensure that all the pages looked slick and more pleasing to the eyes. I spent time refactoring the code to support react and by supporting react making it workable on mobile devices. Chris added the React Responsive Carousel, which is a plugin to add multiple carousel images, shown on individual pages, while I try to refactor some of the codes. 


## Deployment - Heroku & Netifily 

After we deployed the API we found it was easier with Heroku. We linked it up, tested it, and then deployed it. Throughout the project, we linked the frontend to the backend and tested locally, and once we were happy with this we deployed through Heroku and Netifily.


## Final Product 

Home Page

![travel-screenshot](./img/screenshots/image4.png)





Travel Library Index Page:

![travel-screenshot](./img/screenshots/image9.png)




Travel Library INDIVIDUAL PAGE:

![travel-screenshot](./img/screenshots/image20.png)



Travel Library Register Page and Login Page:

![travel-screenshot](./img/screenshots/image25.png)


![travel-screenshot](./img/screenshots/image7.png)




Profile page:

![travel-screenshot](./img/screenshots/image22.png)



Travel Library Add Destination and add Review:

Add destination 

![travel-screenshot](./img/screenshots/image7.png)



Add Review

![travel-screenshot](./img/screenshots/image24.png)







## Wins & Challenges

### Win
* A big win for me personally was that we created a very slick website which has a responsive design. I managed to add all of the features we had originally planned for the travel journey section of the site.


### Challenges
* One of my aims was to get MapBox installed on the website. Unfortunately, we weren't able to get it running due to time constraints and problems with merge conflicts at the start of the project. I do hope to address this in the future version when we get the time to look over projects.


### Bugs
* Some of the styling, especially on the user-profile page wasn’t the same. I hope to address this. 
* We weren't able to upload multiple images. So if the user wants to write a review about a destination the user can only upload one image at a time. 


## Future Content and Improvements:

* Some of the styling, especially on the user-profile page wasn’t the same. I hope to address this. 
* We weren't able to upload multiple images. So if the user wants to write a review about a destination the user can only upload one image at a time.  
* Hope to address the React Card in the review of each section - The design of it wasn’t functional and will not work properly on smaller devices.



## Key learnings
Working in a small group on this project has helped me learn a lot about how I communicate with my teammates and just how important it is to keep talking, especially early on in our project.
It was a great way to communicate what part I was working on and so it helped further in the project. As we were able to reduce merge conflicts to a minimum but had a fair bit of trouble with git conflicts at the beginning. I feel more confident about how to deal with git conflicts and working in a team. Also to play to our strengths and weaknesses and not be afraid to ask for help. Especially working in a team where everyone has their strength. 

