<template>
  <div :class="font">
    <div
      :style="backgroundColor"
      style="
        background-color: rgb(13, 43, 51);
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        overflow-y: scroll;
        overflow-x: hidden;
      "
    >
      <img
        :src="imageUrl"
        style="
          width: 100%;
          -o-object-fit: cover;
          object-fit: cover;
          max-height: 240px;
        "
      />
      <div
        id="curve"
        style="
          height: auto;
          transform: translate(0px, -120px);
          width: 100%;
          background-repeat: repeat-x;
          background-size: auto;
          background-position: center center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 20px;
          flex-direction: column;
          gap: 16px;
          margin-bottom: -90px;
        "
      >
        <img
          :src="logoUrl"
          style="
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 50%;
          "
        />
        <div
          style="
            color: rgb(255, 255, 255);
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
            text-align: center;
            height: 25px;
            color: white;
          "
        >
          {{ titleText }}
        </div>
      </div>

      <div
        style="
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: end;
          position: sticky;
          top: 0px;
          z-index: 100;
          padding: 0px 12px;
        "
      >
        <div
          style="
            background: white;
            width: 100%;
            padding: 10px;
            cursor: pointer;
            border-radius: 6px;
            white-space: nowrap;
            display: flex;
            overflow-x: scroll;
            gap: 4px;
          "
          ref="stickyDiv"
        >
          <div
            v-for="(item, index) in categories"
            :key="index"
            :style="
              chosenCategory === index
                ? tanBarColor
                : 'background-color:#FDFFFE'
            "
            style="
              box-shadow: 0 0px 5px 0 #595959;
              border-radius: 4px;
              font-size: 16px;
              font-weight: 500;
              line-height: 25px;
              padding: 2px 4px;
              display: flex;
              align-items: center;
            "
            :class="{
              ' text-black': chosenCategory !== index,

              'text-white': chosenCategory === index,
            }"
            @click="changeCategory(index)"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div style="width: 100%">
        <!-- list section -->

        <div
          style="
            transform: translateX(0vw);
            transition-duration: 200ms;
            width: -moz-fit-content;
            width: fit-content;
            display: flex;
          "
          :style="listPosition"
        >
          <div
            v-for="(category, index) in categories"
            :key="index"
            class="w-[100vw] justify-center"
          >
            <FoodItem
              style="padding-top: 10px"
              v-for="(item, secondIndex) in sortedItems(categories[index])"
              @click="chooseItem(secondIndex)"
              :key="secondIndex"
              :foodTitle="item.title"
              :foodPrice="item.price"
              :isSuggested="item.isSuggested"
              :imageUrl="item.imagesUrl[0]"
            />
          </div>
        </div>
      </div>
    </div>
    <FooterComponent v-if="false" style="background-color: rgb(13, 43, 51)" />

    <FoodExpanded
      @close-tab="closeItem"
      :isOpen="isExpanded"
      :foodTitle="chosenItem.title"
      :isSuggested="chosenItem.isSuggested"
      :imageUrl="chosenItem.imagesUrl"
      :foodPrice="chosenItem.price"
      :description="chosenItem.description"
      v-if="showExpansionTab"
    />
  </div>
</template>

<script>
/* eslint-disable */
import FoodItem from "@/components/FoodItem.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import FoodExpanded from "@/components/FoodExpanded.vue";
export default {
  name: "MenuPage",
  data() {
    return {
      imageUrl: "../assets/topTimeImages/profile/header.jpg",
      logoUrl: "../assets/topTimeImages/profile/profile.jpg",
      cafeName: "Top time cafe",
      categories: [
        "khalta special blue yogurt",
        "snacks",
        "ice cream and sweets",
        "fruit and candy",
        "drinks",
      ],
      chosenCategory: 0,
      isSticky: false,
      originalOffsetTop: 0,
      chosenIndex: 0,
      closeExpansionTabTime: 300,
      showExpansionTab: false,
      isExpanded: false,
      listXPosition: 100,
      enabledList: 0,
      switchAnimationLength: 200,
      items: [
        {
          title: "Khalta cheetos with special blue yogurt",
          price: "15",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/Khalta/1.jpg"],
          category: "khalta special blue yogurt",
          description: "",
        },
        {
          title: "Khalta blue taxis with special blue yogurt",
          price: "25",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/Khalta/2.jpg"],
          category: "khalta special blue yogurt",
          description: "",
        },
        {
          title: "Khalta red taxis with special blue yogurt",
          price: "25",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/Khalta/3.jpg"],
          category: "khalta special blue yogurt",
          description: "",
        },
        {
          title: "Khalta doritos blue with special blue yogurt",
          price: "15",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/Khalta/4.jpg"],
          category: "khalta special blue yogurt",
          description: "",
        },
        {
          title: "Khalta doritos red with special blue yogurt",
          price: "15",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/Khalta/5.jpg"],
          category: "khalta special blue yogurt",
          description: "",
        },
        {
          title: "Khalta oman chips with special blue yogurt",
          price: "15",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/Khalta/6.jpg"],
          category: "khalta special blue yogurt",
          description: "",
        },
        {
          title: "Khalta amwaj chips with blue yogurt",
          price: "15",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/Khalta/7.jpg"],
          category: "khalta special blue yogurt",
          description: "",
        },
        {
          title: "Pink korean noodles",
          price: "25 ",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/1.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Pink korean noodles small size",
          price: "15",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/2.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Pink korean noodles with cheetos",
          price: "30",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/3.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Pink korean noodles with cheetos small size",
          price: "20",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/4.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Vegetables andomi",
          price: "30",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/5.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Vegetables andomi small size",
          price: "15",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/6.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Curry andomi",
          price: "30",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/7.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Curry andomi small size",
          price: "15",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/8.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Chiken andomi",
          price: "30",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/9.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Chiken andomi small size",
          price: "15",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/10.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Black korean noodles",
          price: "25",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/11.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Yellow korean noodles",
          price: "25",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/12.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Fatta warqa anab",
          price: "35",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/13.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Warqa anab",
          price: "35",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/14.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Sweet corn",
          price: "35",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/15.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Sweet corn with cheetos",
          price: "35",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/16.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Sweet corn  with blue yogurt and oman chips",
          price: "35",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/17.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Pink korean noodles with sausage",
          price: "30",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/18.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Vegetables andomi with sausage",
          price: "35",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/19.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Trend Fatta waraq anab with oman chips",
          price: "35",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/20.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Pink korean noodles with zinger",
          price: "35",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/21.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Pink korean noodles with Cheetos and zinger",
          price: "40",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/22.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Black korean noodles with zinger",
          price: "35",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/23.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Yellow korean noodles with zinger",
          price: "35",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/snacks/24.jpg"],
          category: "snacks",
          description: "",
        },
        {
          title: "Cheesecake raspberry",
          price: "40",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/sweet/1.jpg"],
          category: "ice cream and sweets",
          description: "",
        },
        {
          title: "Cheesecake mango",
          price: "40",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/sweet/2.jpg"],
          category: "ice cream and sweets",
          description: "",
        },
        {
          title: "mango sour",
          price: "10",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/candy/1.jpg"],
          category: "fruit and candy",
          description: "",
        },
        {
          title: "Spicy mango sour",
          price: "10",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/candy/2.jpg"],
          category: "fruit and candy",
          description: "",
        },
        {
          title: "Sour pomegranate",
          price: "15",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/candy/3.jpg"],
          category: "fruit and candy",
          description: "",
        },
        {
          title: "Khalta trend lavashak sour",
          price: "25",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/candy/4.jpg"],
          category: "fruit and candy",
          description: "",
        },
        {
          title: "Dried sour cherries",
          price: "15",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/candy/5.jpg"],
          category: "fruit and candy",
          description: "",
        },
        {
          title: "Sunflower seed special iran",
          price: "15",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/candy/6.jpg"],
          category: "fruit and candy",
          description: "",
        },
        {
          title: "Sour skittles amriki have salt",
          price: "12",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/candy/7.jpg"],
          category: "fruit and candy",
          description: "",
        },
        {
          title: "Canles cherry sours trend lane",
          price: "10",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/candy/8.jpg"],
          category: "fruit and candy",
          description: "",
        },
        {
          title: "Mixture of sour fruits and sauce",
          price: "15",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/candy/9.jpg"],
          category: "fruit and candy",
          description: "",
        },
        {
          title: "Skittles sours balls",
          price: "12",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/candy/10.jpg"],
          category: "fruit and candy",
          description: "",
        },
        {
          title: "Khalta amriki redbull",
          price: "20",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/drink/1.jpg"],
          category: "drinks",
          description: "",
        },
        {
          title: "Khalta amriki rita blue",
          price: "20",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/drink/2.jpg"],
          category: "drinks",
          description: "",
        },
        {
          title: "Khalta amriki ornamin c",
          price: "20",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/drink/3.jpg"],
          category: "drinks",
          description: "",
        },
        {
          title: "Mango passion fruit slush",
          price: "25",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/drink/4.jpg"],
          category: "drinks",
          description: "",
        },
        {
          title: "Vimto slush",
          price: "15",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/drink/5.jpg"],
          category: "drinks",
          description: "",
        },
        {
          title: "Cotton candy slush",
          price: "20",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/drink/6.jpg"],
          category: "drinks",
          description: "",
        },
        {
          title: "Redbull with special  blue syrup",
          price: "25",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/drink/7.jpg"],
          category: "drinks",
          description: "",
        },
        {
          title: "Redbull with special red syrup",
          price: "25",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/drink/8.jpg"],
          category: "drinks",
          description: "",
        },
        {
          title: "Special blue mojito",
          price: "25",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/drink/9.jpg"],
          category: "drinks",
          description: "",
        },
        {
          title: "Specila red mojito",
          price: "25",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/drink/10.jpg"],
          category: "drinks",
          description: "",
        },
        {
          title: "Black magic toptime syrup asli",
          price: "30",
          isSuggested: false,
          imagesUrl: ["../assets/topTimeImages/drink/11.jpg"],
          category: "drinks",
          description: "",
        },
      ],
    };
  },
  computed: {
    sortedItems() {
      return (category) => {
        return this.items
          .filter(
            (item) => item.category === this.categories[this.chosenCategory]
          )
          .slice()
          .sort((a, b) => {
            // Define sorting order
            const aSuggested = a.isSuggested ? 0 : 1;
            const bSuggested = b.isSuggested ? 0 : 1;

            const aHasImages = a.imagesUrl.length > 0;
            const bHasImages = b.imagesUrl.length > 0;

            const aHasPrice = a.price.length > 0;
            const bHasPrice = b.price.length > 0;

            // Sort by suggested status first
            if (aSuggested !== bSuggested) {
              return aSuggested - bSuggested;
            }

            // If both have or both don't have imagesUrl, sort by price
            if (aHasImages === bHasImages) {
              if (aHasPrice && !bHasPrice) return -1;
              if (!aHasPrice && bHasPrice) return 1;
              return 0; // They are the same in this regard
            }

            // Sort by imagesUrl presence
            if (aHasImages && !bHasImages) return -1;
            if (!aHasImages && bHasImages) return 1;

            return 0; // This should not happen
          });
      };
    },
    chosenItem() {
      return this.sortedItems(this.categories[this.chosenCategory])[
        this.chosenIndex
      ];
    },
    listPosition() {
      return (
        "transform:TranslateX(" +
        this.listXPosition * -this.chosenCategory +
        "vw);"
      );
    },
    backgroundColor() {
      return "background-color:" + this.$store.getters.backgroundColor;
    },
    titleColor() {
      return "color:" + this.$store.getters.titleColor;
    },
    titleText() {
      return this.$store.getters.title;
    },

    tanBarColor() {
      return "background-color:" + this.$store.getters.tanBarColor;
    },
    font() {
      return this.$store.getters.font;
    },
  },

  methods: {
    changeCategory(index) {
      console.log(index);
      this.chosenCategory = index;
      setTimeout(() => {
        this.enabledList = index;
      }, this.switchAnimationLength);
    },
    chooseItem(index) {
      this.chosenIndex = index;
      this.isExpanded = true;
      this.showExpansionTab = true;
    },
    closeItem() {
      this.isExpanded = false;
      setTimeout(() => {
        this.showExpansionTab = false;
      }, this.closeExpansionTabTime);
    },
    handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > this.originalOffsetTop - 40) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  },
  components: {
    FoodItem,
    FooterComponent,
    FoodExpanded,
  },
  mounted() {
    this.originalOffsetTop = this.$refs.stickyDiv.offsetTop;

    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
#curve {
  background-image: url("@/assets/Vectors/Asset 1.svg");
}

/* Optional: Style for a more consistent scroll experience */
.scroll-container::-webkit-scrollbar {
  height: 0px;
}

.scroll-container::-webkit-scrollbar-thumb {
  border-radius: 0px;
}

.scroll-container::-webkit-scrollbar-thumb:hover {
}

html {
  overflow-x: hidden;
}
</style>
