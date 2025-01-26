import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">InventoryApp</h2>
          <p className="mb-4">
            InventoryApp is a leading inventory management solution that helps businesses streamline their operations and manage their stock efficiently.
          </p>
          <p>&copy; {new Date().getFullYear()} InventoryApp. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="/" className="hover:text-gray-400">Home</a>
            </li>
            <li className="mb-2">
              <a href="/products" className="hover:text-gray-400">Products</a>
            </li>
            <li className="mb-2">
              <a href="/categories" className="hover:text-gray-400">Categories</a>
            </li>
            <li className="mb-2">
              <a href="/reports" className="hover:text-gray-400">Reports</a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:text-gray-400">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <p className="mb-2">
            <strong>Email:</strong> support@inventoryapp.com
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p className="mb-2">
            <strong>Address:</strong> 123 Inventory St, Suite 100, City, State, 12345
          </p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.591 1.325-1.324v-21.351c0-.733-.592-1.325-1.325-1.325z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.924 2.205-4.924 4.924 0 .386.044.762.127 1.124-4.092-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.574-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.062c0 2.388 1.698 4.384 3.95 4.835-.414.112-.849.171-1.296.171-.317 0-.626-.031-.927-.088.627 1.956 2.444 3.379 4.6 3.419-1.684 1.32-3.809 2.107-6.115 2.107-.398 0-.79-.023-1.175-.069 2.179 1.397 4.768 2.212 7.548 2.212 9.057 0 14.01-7.506 14.01-14.01 0-.213-.005-.426-.014-.637.961-.694 1.796-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0h-20.46c-.974 0-1.77.796-1.77 1.77v20.459c0 .974.796 1.771 1.77 1.771h20.459c.974 0 1.771-.797 1.771-1.771v-20.459c0-.974-.797-1.77-1.771-1.77zm-13.539 20.452h-3.077v-10.452h3.077v10.452zm-1.538-11.938c-.987 0-1.787-.8-1.787-1.787s.8-1.787 1.787-1.787 1.787.8 1.787 1.787-.8 1.787-1.787 1.787zm13.539 11.938h-3.077v-5.604c0-1.336-.027-3.057-1.861-3.057-1.861 0-2.146 1.454-2.146 2.957v5.704h-3.077v-10.452h2.951v1.428h.042c.411-.776 1.414-1.595 2.91-1.595 3.108 0 3.681 2.046 3.681 4.707v5.912z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.058-2.418.27-3.29 1.142-.872.872-1.084 2.009-1.142 3.29-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.281.27 2.418 1.142 3.29.872.872 2.009 1.084 3.29 1.142 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.058 2.418-.27 3.29-1.142.872-.872 1.084-2.009 1.142-3.29.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.281-.27-2.418-1.142-3.29-.872-.872-2.009-1.084-3.29-1.142-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;