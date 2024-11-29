import React from 'react';

// The component takes an optional `classList` prop
const Promo = ({ classList = '' }) => {
  return (
    <div className={`py-3 bg-dark bg-pattern ${classList}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">

            {/* Text */}
            <div className="text-center text-white">
              <span className="heading-xxs letter-spacing-xl">
                ⚡️ Anything you dream of, we get it! ⚡️
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;