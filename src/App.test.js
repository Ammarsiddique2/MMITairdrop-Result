import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});





<Grid item lg={2.9}>
          <Grid container>
            <Grid item lg={2.6} style={{ backgroundColor: "white" }}>
            <section class="app">
              <aside class="sidebar">
                {/* <header
                  style={{ color: "white", cursor: "pointer" }}
                  onClick={()=>navigate("/tab")}
                >
                  <b>DashBoard</b>
                </header> */}
                 <header
                  style={{ color: "white", cursor: "pointer" }}
                >
                  <b>DashBoard</b>
                </header>
                <nav class="sidebar-nav">
                  <ul>
                    {/* <li>
                      <a onClick={() => navigate("/card")}>
                        <i class="ion-bag"></i>{" "}
                        <span style={{ color: "white", cursor: "pointer" }}>
                          Card
                        </span>
                      </a>
                    </li> */}
                    {/* <li>
                    <Link
                      to={{
                        pathname: '/tab',
                        search: '?data=' + encodeURIComponent(todo),
                      }}
                    > <a>
                        <i class="ion-bag"></i>{" "}
                        <span style={{ color: "white", cursor: "pointer" }}>
                          Card
                        </span>
                      </a>
                    </Link>
                    </li> */}
                    <li>
                      <a>
                  
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i class="ion-ios-medical-outline"></i>{" "}
                        <span class="" style={{ color: "transparent" }}>
                          Cocaine
                        </span>
                      </a>
                    </li>
                  </ul>
                  <Grid
                    container
                    style={{
                      justifyContent: "center",
                      gap: "30px",
                      marginTop: "120%",
                    }}
                  >
                    {/* <Grid item lg={5} className="sidebar_img">
                      <h2 style={{ color: "white" }}>
                        {image.length < 1 ? " " : image[0].image.toString()}
                      </h2>
                    </Grid>
                    <Grid item lg={5} className="sidebar_img">
                
                    </Grid>
                    <Grid item lg={5} className="sidebar_img">
                  
                    </Grid>

                    <Grid item lg={5} className="sidebar_img">
                  
                    </Grid> */}
                       {imageBuffer && (
                          <img
                            src={URL.createObjectURL(new Blob([imageBuffer]))}
                            alt="Image"
                          />
                        )}
                  </Grid>
                </nav>
              </aside>
            </section>
            </Grid>
          </Grid>
        </Grid>