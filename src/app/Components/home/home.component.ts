import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  // currentSection: string = 'home';
  // selectedProject: any = null;
   showAnimation = true;
  selectedBadge: string = '';
  selectedSubBadge: string = '';
  selectedContactBadge: string = '';


  selectBadge(badge: string) {
    this.selectedBadge = badge;
    this.selectedSubBadge = ''; // Reset sub badge when switching top-level badge
    this.selectedContactBadge = '';

  }
  selectSubBadge(sub: string) {
    this.selectedSubBadge = sub;
  }
  selectContactBadge(contact: string) {
    this.selectedContactBadge = contact;
  }
  showIntro = true;

  ngOnInit() {
    // Disable scrollbar by adding class
    document.body.classList.add('no-scroll');
  
    // Wait for the animation to complete before re-enabling scrolling
    setTimeout(() => {
      this.showIntro = false;
      document.body.classList.remove('no-scroll'); // Remove scrollbar hide
    }, 3000); // Match the animation duration (3s in this case)
  }
  isPageLoading = false;

  // Trigger animation when page changes
  triggerPageAnimation() {
    this.isPageLoading = true;
    setTimeout(() => {
      this.isPageLoading = false;
    }, 2000); // Match with the animation duration
  }
  userEmail: string = '';
subject: string = '';
message: string = '';

sendEmail() {
  const templateParams = {
    user_email: this.userEmail,
    subject: this.subject,
    message: this.message
  };

  emailjs.send('service_z8loh0w', 'template_4a0bzrc', templateParams, 'usJ3ThBEo-LhptTf3')
    .then((response) => {
      alert('Email sent successfully!');
      this.userEmail = '';
      this.subject = '';
      this.message = '';
    }, (error) => {
      alert('Failed to send email. Please try again.');
      console.error('Email error:', error);
    });
}

  
}
