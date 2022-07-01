import Aside from '../components/Aside';

function HomePage() {
  return (
    <div className="sidebar-widget widget_categories mb-50 mt-30">
      <div className="widget-header-2 position-relative">
        <h5 className="mt-5 mb-15">Hot topics</h5>
      </div>
      <div className="widget_nav_menu">
        <ul>
          <li className="cat-item cat-item-2">
            <a href="category.html.htm">Travel tips</a>{' '}
            <span className="post-count">30</span>
          </li>
          <li className="cat-item cat-item-3">
            <a href="category-grid.html.htm">Book review</a>{' '}
            <span className="post-count">25</span>
          </li>
          <li className="cat-item cat-item-4">
            <a href="category-list.html.htm">Hotel review</a>{' '}
            <span className="post-count">16</span>
          </li>
          <li className="cat-item cat-item-5">
            <a href="category-masonry.html.htm">Destinations </a>{' '}
            <span className="post-count">22</span>
          </li>
          <li className="cat-item cat-item-6">
            <a href="category-big.html.htm">Lifestyle</a>{' '}
            <span className="post-count">25</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
