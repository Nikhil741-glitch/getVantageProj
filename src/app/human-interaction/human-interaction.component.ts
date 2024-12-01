import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-human-interaction',
  templateUrl: './human-interaction.component.html',
  styleUrls: ['./human-interaction.component.scss']
})
export class HumanInteractionComponent {

  items = [
    {
      title: 'STORIES',
      description:
        'Server frenzy, explained. What does one need to run a website, anyway? (pt.1)',
      image: 'assets/image1.jpg',
    },
    {
      title: 'WORK',
      description:
        'A tour operating agency from Reykjavik now has a high performing website',
      image: 'assets/image2.jpg',
    },
    {
      title: 'STORIES',
      description:
        'Personalization is the mother of all Business Growth',
      image: 'assets/image3.jpg',
    },
    {
      title: 'STORIES',
      description:
        'Client-agency relationship while building a site or app, pt.2',
      image: 'assets/image4.jpg',
    }, {
      title: 'STORIES',
      description:
        'Maximizing product success: A journey through effective product discovery',
      image: 'assets/image5.jpg',
    },
    {
      title: 'WORK',
      description:
        'Revolutionizing B2B beverage distribution with a custom mobile app',
      image: 'assets/image6.jpg',
    },
  ];


  awards = [
    { image: 'assets/award1.png', name: 'Award 1', url: 'https://www.webbyawards.com/' },
    { image: 'assets/award2.png', name: 'Award 2', url: 'https://www.lovieawards.com/' },
    { image: 'assets/award3.png', name: 'Award 3', url: 'https://danikomunikacija.com/awards/mixx' },
    { image: 'assets/award4.png', name: 'Award 4', url: 'https://www.red-dot.org/' },
    { image: 'assets/award5.png', name: 'Award 5', url: 'https://www.indigoaward.com/' },
    { image: 'assets/award6.png', name: 'Award 6', url: 'https://www.w3award.com/' },
    { image: 'assets/award7.jpg', name: 'Award 7', url: 'https://www.csswinner.com/' },
    { image: 'assets/award8.png', name: 'Award 8', url: 'https://thefwa.com/' }
  ];

  buttonColor = 'text-white'; // Default button color

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY;
    const threshold = 200; // Adjust based on your requirement

    this.buttonColor = scrollPosition > threshold ? 'text-black' : 'text-white';
  }
  
  isDialogOpen = false;

  openDialog() {
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }
  
}
