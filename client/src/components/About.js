import React from 'react';

class About extends React.Component {
  render(){
    return(
      <div className="grid-container grid-container-padded" style={styles.background}>
        <div className="cell" style={styles.box}>
          <div style={styles.headerBackground}>
            <h1 style={styles.h1}>About</h1>
          </div>
          <p style={styles.h1.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat pharetra tortor, nec volutpat sapien. Praesent tristique efficitur mi et pulvinar. Maecenas vitae dignissim ante. Phasellus massa urna, imperdiet eu est vitae, feugiat sollicitudin dui. Fusce suscipit aliquam lectus. Aenean blandit sodales urna, at maximus ex gravida sit amet. Quisque suscipit, magna eget tincidunt sollicitudin, orci turpis accumsan lorem, vel imperdiet velit nulla ac quam. Praesent libero nunc, malesuada id est nec, tristique auctor ex. Mauris ipsum nulla, laoreet sed arcu a, porta accumsan tellus.

            Donec viverra venenatis nulla at malesuada. Nunc luctus massa vitae dapibus rutrum. Sed nisl turpis, viverra vitae eros non, auctor posuere ante. Vestibulum eget convallis felis. Sed rhoncus massa id metus tristique, sollicitudin ornare arcu gravida. Sed finibus nunc ipsum, a consequat lacus commodo tristique. Cras turpis diam, aliquet at consequat ut, tristique non nunc. Aenean non nibh in purus sodales efficitur at sit amet enim. Nulla quis elit dolor. Nulla iaculis facilisis ex eget varius. Fusce hendrerit nisi arcu, in maximus lacus lobortis vel. In eros ligula, egestas eu bibendum quis, porta vel nulla. Integer at congue felis. Nullam hendrerit mi sit amet mauris bibendum, ac malesuada metus malesuada.

            In posuere neque ac dictum congue. Etiam imperdiet, ipsum sit amet ornare pellentesque, arcu velit porttitor ante, vitae blandit risus arcu sit amet massa. Proin felis lacus, venenatis eget interdum eget, ornare eget turpis. Quisque id nibh non est rutrum aliquet iaculis sed lacus. Nam ut posuere ante. Vivamus rutrum turpis sit amet viverra sollicitudin. Fusce nec arcu varius, rutrum orci nec, luctus metus. Praesent vulputate faucibus eleifend. Sed ornare lacinia nisi non feugiat. Proin ultrices velit orci, vitae convallis odio iaculis sit amet. Donec elementum urna elit, rutrum malesuada enim vestibulum at. Donec finibus ante et nunc tincidunt, fringilla dictum lectus tincidunt. Maecenas urna urna, blandit eget condimentum nec, pulvinar ac tellus.

            Morbi lobortis lectus quam, eget egestas purus condimentum sit amet. Etiam ex mauris, auctor eu diam at, vestibulum gravida massa. Nam vitae odio at dolor fermentum lacinia. Morbi dictum, erat consectetur tristique ullamcorper, arcu nibh maximus diam, a mollis sapien eros eu nunc. Aenean et maximus est. Nunc mauris metus, fermentum eu justo vel, mollis pretium ante. Integer iaculis hendrerit massa eget elementum. Donec quis rutrum libero. Cras sit amet leo egestas, efficitur nisl non, lobortis mi. Quisque id lobortis diam. In aliquet metus non augue feugiat posuere. Donec dolor purus, consequat vel suscipit vitae, faucibus rutrum lacus. Donec pellentesque sagittis tellus, in hendrerit dui auctor vitae. Etiam risus est, consectetur ac erat nec, commodo consequat leo.
          </p>
        </div>
      </div>
    )
  }
}


export default About;


const styles ={
};
styles.headerBackground = {
  background:'#e6e6e6',
  height: '100px',
  width: 'auto',
  paddingTop:'10px'
}

styles.h1 = {
  fontFamily:'Raleway',
  textAlign:'Center',
}

styles.h1.body = {
  padding: "10px 80px 40px 80px",
  textAlign:'justify'
}

styles.box = {
  boxShadow: "0 20px 30px #e6e6e6"
}
