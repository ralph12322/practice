const products = [
  {
      name: 'socks',
      size: [
          'small',
          'medium',
          'large'
      ],
      price: [
          1090, 
          9020,
          10
      ]
  },
  {
      name: 'shirt',
      size: [
          'small',
          'medium',
          'large'
      ],
      price: [
          100, 
          200,
          250
      ]
  },
  {
      name: 'bag',
      size: [
          'small',
          'medium',
          'large'
      ],
      price: [
          100,
          200,
          250
      ]
  },
  {
      name: 'shoes',
      size: [
          'small',
          'medium',
          'large'
      ],
      price: [
          100,
          200,
          250
      ]
  }
]

const serve = {
  selected : '',
  productName: '', 
  productFound: null,
  sizeFound: null,
  select: document.getElementById('selections'),

  getproduct() {
      this.productName = document.getElementById('get').value.trim();
      const displayMess = document.getElementById('display');
      this.productFound = products.find(item => item.name.toLowerCase() === this.productName.toLowerCase());
      
      if(this.productFound){
          displayMess.style.display = 'block';
          displayMess.innerHTML = `Product found: ${this.productFound.name} <br>Please select your preferred size: <br>Sizes: ${this.productFound.size.join(', ')}`;
          this.select.style.display = 'block';
      }
      else if(this.productName === ''){
          displayMess.style.display = 'block';
          displayMess.innerHTML ='Enter a product first!!!';
      }
      else{
          displayMess.style.display = 'block';
          displayMess.innerHTML ='The Product is not found.';
      }
 
  },

  selectSize(){
      const options = document.getElementById('selections');
      const small = document.getElementById('small');
      let sizeIndex = '';
      
      small.addEventListener('click', () => {
          this.selected = 'small';
          sizeIndex = this.productFound.size.indexOf(this.selected);
          this.sizeFound = this.productFound.size[sizeIndex]
          this.summaryCart();
      })
      const medium = document.getElementById('medium');
      medium.addEventListener('click', () => {
          this.selected = 'medium'
          sizeIndex = this.productFound.size.indexOf(this.selected);
          this.sizeFound = this.productFound.size[sizeIndex]
          this.summaryCart();
      })
      const large = document.getElementById('large');
      large.addEventListener('click', () => {
          this.selected = 'large'
          sizeIndex = this.productFound.size.indexOf(this.selected);
          this.sizeFound = this.productFound.size[sizeIndex]
          this.summaryCart();
      })
  },

  summaryCart(){
      const summaryMess = document.getElementById('summary');
      if (this.productFound) {
          summaryMess.innerHTML = `Summary: You selected ${this.productFound.name} with the size of ${this.sizeFound}`;
      } else {
          summaryMess.innerHTML = '';
      }
  }
}

const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
  serve.getproduct();
})
serve.selectSize();