/**
 * Google Analytics tracking functions
 * 
 * This file contains functions for tracking events with Google Analytics.
 * These functions should be called when specific user actions occur.
 */

/**
 * Track "Book Now" button clicks
 * This function should be called when a user clicks on a "Book Now" button
 */
export const trackBookNowClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'allow_custom_scripts': true,
      'send_to': 'DC-15267995/invmedia/kinet00+standard'
    });
  }
};

/**
 * Track "Book Appointment" button clicks
 * This function should be called when a user clicks on a "Book Appointment" button
 */
export const trackBookAppointmentClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'allow_custom_scripts': true,
      'send_to': 'DC-15267995/invmedia/kinet000+standard'
    });
  }
}; 