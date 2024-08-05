import React from 'react';

const AboutUs = () => {
  const styles = {
    heading: {
    
      textAlign: 'center',
      borderBottom: '2px solid red',
      paddingBottom: '10px',
      marginBottom: '20px',
      
    },
    content: {
      padding: '20px',
      fontSize: '18px',
      lineHeight: '1.6',
    }
  };

  return (
    <div className="aboutUs-container container">
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum,
        nibh et sagittis ultrices, lorem ipsum commodo urna, non ultricies nisl
        erat vel magna. Praesent vel neque id lorem pharetra vehicula. Cras
        laoreet dolor nec turpis placerat, vel dapibus ex ultricies. Suspendisse
        potenti. Ut accumsan mauris et dui elementum, ut malesuada est
        vulputate. Nulla facilisi. Integer non eros lacus. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Duis at malesuada elit, ac luctus libero.
      </p>
    </div>
  );
};

export default AboutUs;
