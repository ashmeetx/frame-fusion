// Dummy data for gallery items
const galleryItems = [
    'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1595567582054-f2f0a1940235?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1589463349208-95817c91f971?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1620420375091-f66a919dcbda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1687826541778-3f2bf4c03bc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

// Populate gallery
const galleryContainer = document.querySelector('.gallery .row');
galleryItems.forEach(item => {
    galleryContainer.innerHTML += `
        <div class="col-md-4 gallery-item">
            <img src="${item}" class="img-fluid" alt="Gallery Image">
        </div>
    `;
});

// Dummy data for testimonials
const testimonials = [
    { name: 'Ishita', text: 'Working with Frame-Fusion was an absolute pleasure. Their attention to detail and creativity truly made our photoshoot an unforgettable experience. I could not  be happier with the results!' },
    { name: 'Anushka', text: 'I am amazed by the professionalism and talent of the team at Frame-Fusion. They have a knack for capturing the essence of every moment and turning it into stunning imagery. Highly recommend!' },
    { name: 'Ashmeet', text: 'From start to finish, Frame-Fusion exceeded my expectations. They listened to my vision and brought it to life with their artistic flair. I am thrilled with the photos and can not wait to work with them again' }
];

// Populate testimonials
const testimonialContainer = document.querySelector('.testimonial .carousel-inner');
testimonials.forEach((testimonial, index) => {
    const activeClass = index === 0 ? 'active' : '';
    testimonialContainer.innerHTML += `
        <div class="carousel-item ${activeClass}">
            <div class="testimonial-item">
                <p>${testimonial.text}</p>
                <p><strong>${testimonial.name}</strong></p>
            </div>
        </div>
    `;
});
