<template>
  <div class="about">
    <div class="parallax-section about-info">
      <div class="content p-3 text-center">
        <p>Artesanal, Natural & Organic crafts</p>
      </div>
    </div>
    <div class="p-5 text-center story">
      <h4 class="text-center">Kiwie story</h4>
      <div class="w-50 content">
        <P>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</P>
        <P>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</P>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      backgroundImgs: [
        {
          parallaxImg: `backgroundImage: url("https://picsum.photos/id/10/2500/1667")`
        },
        {
          background: `backgroundImage: url("https://picsum.photos/id/1018/3914/2935")`
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.about {
  margin-top: 210px;
}

.parallax-section {
  min-height: 500px;
  background-image: url("https://picsum.photos/id/1014/6016/4000");
  background-attachment: fixed;
  background-size: cover;
  background-position: 50% 50%;
  overflow: hidden;
}

.about-info {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  .content {
    max-width: 600px;
    p {
      font-size: 30px;
    }
    hr {
      width: 40%;
      border-top: 1px solid white;
    }
  }
}

.story {
  .content {
    margin: 0 auto;
  }
}
</style>
