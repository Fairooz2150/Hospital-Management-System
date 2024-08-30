import React from 'react';

const Biography = ({ imageUrl }) => {
    return (
        <div className='container biography'>
            <div className="banner">
                <img src={imageUrl} alt="About" />
            </div>

            <div className="banner">
                <p>Biography</p>
                <h3>Who We Are</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui harum commodi, sunt pariatur
                    corporis molestias voluptatum facilis quidem libero doloremque. Ipsum explicabo ratione magni
                    laboriosam minus necessitatibus dolor repellat iste nemo animi quia blanditiis deserunt rerum
                    error non voluptatem rem sunt obcaecati perspiciatis, doloremque ab dignissimos aperiam consectetur
                    consequuntur! Harum.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, reprehenderit sapiente facilis, aspernatur, vero facere blanditiis inventore veniam dolores fugiat deleniti! Repellendus quibusdam ipsa fugit qui id ab dolor cumque, repudiandae totam, nesciunt autem nihil?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis blanditiis consequatur corporis.</p>
                <p>Lorem, ipsum dolor.</p>
            </div>

        </div>
    );
}

export default Biography;
