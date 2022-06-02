
import './App.css';
import Date from './components/Date';
import Devices from './components/Devices';
import Heading from './components/Heading';
import Logo from './components/Logo';
import Subheading from './components/Subheading';

function App() {
  let date1 = "28/10/2020";
  let date = "17 Sep 2020";

  let heading = "Amazon Gift Pay";
  let heading1 = "Apple Gift Payment";

  let devices = "Desktop - Mobile";
  let devices1 = "MacOS - Mobile";

  let image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADmCAMAAACJZRt4AAAAyVBMVEX///8jHx73pR4AAAAFAACura73nwD4pB8jHyD+/v/3ngD3pR0hHR34+PgJAAD3oQDy8vLr6+y+vr7m5uabmpp3dnYcFxfX1dZwbm9APj8XERAcFxa/v7/Ly8v4ohX6yoX5vGP86Mv5wnNoZ2c6NjcpJSeLiYpOTE1eW1yioaF7enq1tbURCgmrq6uFhIX6zI398dz99uj4sEL73LH71qT9+fI+OTtKR0gYDxNVU1QyLi/826785sb4qS74t1n4tU33sDj3xnr6y4l1N9X/AAAJuUlEQVR4nO2cCX+iPBCHW6KIgByrosWKdy9pvVe7am37/T/Um4BWWzNoXSqw7zy7v7YqQv7JZGZywMUFgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiDI/45svpouPLSep1ftdnv63CoW0tV81IUKhVLhrkNISnNty7JUi2FrKZL600onW6DRbbnEraiXHFQ7Rf7clKIu4qlUWyRlc4VtsFzSTueiLucJdK+IHSRsTYVYhaTJq06JdYQ0zz61znXUxf0OZutoaZ480kpO411bxxjkrjq3nRTPckMCvQgPydKSoa5IvivNazySBHV3J2ljpmlGXfSDtLTTtNGg9zvqsh/i5sR2Y5BC1KUPpkuk08WpJNbJpqF+20/uYpejFhBE0f0bbfFuulJAgFPpaMe2bVUNslstxr3uuQJKc4l11SoWW1c2mcHy1HY2ag0QJcibqKRTKK2zR+O6DOedUnwj+QM/o5Rs+/5Tg5RuNajxtPuoCn8AQ+P2OEm720s9iilAXGz9ZZcfv907zrEtm992lenZi30c5RmvuNYt79gc1D2leA7ssn94VikBoasApKBaPCNdnhvk3BvgaEBcTN3lL26XA1viih8TSfWshT4Wrj+pcHsco8iPGySec0VGx923S8gqaafjp6Gke84yH0++LGmEkJQ7s611Bhkwd5Dmh7pUTMVRcmbpOl14uJt2mEzNJU/goUBU1NJnLO6J5Ix8tXv/FNAM18kVdxi+c71Mobi480+LA/rcvyHuFxAKEiwua5aq3cJN+e6qw59uSaS4XL76eFOeWsRfHq9YwFRS0sTluzd3bS+m25WD85oJEpct3bckQlzaTkfORCdGXLXYIVrwin9CxeVvOsQOnIFNrLh8K8UZAP0T4szyUbs0EikurbnSqStZMRdn3n1/vT8p4krSqRYZf3FdAq70bJEYyRP365BJqpbtsikIAixTxlhcNUibarlE6zwXC+lf19USMPsVX3H5gHTE0shtoWp+rGUlbjzXtqAIUCHtR+PTsUkTdwOtuknk994secKmGQJWjTnr+AkT98xf6pYslbe4kSxxVWBjlJriTqknS9wtMHMArNskSlwJaDj7gX88sFYQT3E3/KCsEoN/fDdJU3u/+UZpF4HjH/nrxrEUlwfiALgMnKT0K53itxy49QJYNo6luCJ3E0rAmjgQFWO5PnfFLyvY5bLAdHosxQFTyeCCfx4w4zjubDOAPTMutDv0HvjCDAiLUZIHQjgoDuhyl1YMd7ZB4mxgO4MJDdlVN34728Dkq8U/HshnLmO5PwoSV2lzDzfh6T8X3roSFZBZXqa4G9sCtuirVuzs0oTEcV174CRZ/Lbf56CmUK39g00ggK+/AY0jogMsL9lruuw0eMI9fpu4b6FZ9L2Ne8aVe2AJKHbbEmHfrn527lXJOrS+pfK9UHQAc6wUSSVPHw4wXz5mfcuaxuuuF2MGF1rSZuV0tVS6LkzJ7JhtDZIGDSYiAkoWPdhzGNjKzhHLW/7xMduk/gjNpZ/ELF55ChjGTxMXM7t8+uZdj5IE7pWiPihmO/BN/k1YsDjrTxv4hkUeo1bzFXAFi8+sYwA5pj2Llzth5H4f6wxZu9ltk18fkjuN463+/FuVeKiX2q0X2Nt7AUQld/GK4BuOvgVeIg++gr37kyUC3iATNffHxQNru9T6+PkbavxcyZYubYlDtim5nR2H8bTbdhUrfjMoO1SlQwMaizx8Go2Wt07F/hOz4cBXjIDbwNlt/mT61c+3Nj1VewanT2LjY6rPBBgiqDPyzEk9Hojf3YJG4IPGaNxjjOeL/iS8wma/XW+l/ee0qRVbI+oDPzoXSIU2KddNsksP5vWlLlIcUWS/daG+iLItc9dPtxYhmua6mqbR8Y79u3wP5x2/bju8JmUMxkNZdDKKsEVRHPklnHKOX0anfTFXqqbvC4XCfbpbLZ04GTl416kyiiBk/F8M+lvun3bCL1CLWJ4o768Zi85aTCajeAo3rScvQrnASFYEeRXOub5JXVYyjuN1N1GUvV63aTwxpPpe6JmMI64a4ZzteLKTpS4M67XxfNToezRGtaW4FhdWbTeWTkZwxPrZ5U0G+06/pvtmGU5hqM+dvIq0MztnNk7A2b96hikOQrvOpOlZgyMORyEG0NN4YT5GWYZ5yrmoMGes6Mo4YnkvLOQ5zVDP2V/qXpxRRLHZOG+yR6/V79Vra0N8VWgpxHm4l5jUdd8N0873etbmm4xWsuPIQ/+Fw8KdGE4M32HkOF4UpdYp6vVz9b7Gm8BCOU3A/JdeFYfa5XwGL+soI7DQsKz9fGzoj4frwJ2Ra947PSou49R+4mJz3dnIyyhU39tPBodBb6h716MuRJHf/DeHtMv9gFX6F6yLLNFbp3lUn9BchBdy1jBv1aDKHEfxMmbqHZfrWpww23FWYV9xc9mFoH8efuj6ahxuTU4WTUHUlY9BgCM3Nx18xOo2rMSSR093Ntl5RvHaUZSV+vhvB8hZL7xMFr2VKHtNtu7dGXm4jT11h1npT/qyQVN0tqMPvwXpKNlZ9f7ORPuj2qsob6vOqz1RGe9cmeUS8hg+RRj069vRx7YgbHSyrL+Pvt+GE5rwvyhsSOMP33yXxfyi09s92ZiNUIY/nkIsVqIjcPAUOsP6+7xxjMZJvzF/rw9px9V5teW8fTaFIbWYkAYEwTTq8n55/G6i+ENMRxi+NN9789GCDsgGg4nPYEBHZovRuPdWHy517zhF+DTM9luPZgq1L1bep6MT8UdiHE+eqAt71b3574VCZz2S1kXdURxFYe+I/jvU07PKyaynEb6eRhR6ex24pjOjPBeDnsO3zq8omTWKsp3oAWHpK8fdT2iPU0KPqgHQrJaZ1X7Vf7KxL3rgg9kHtL6aXuD86jfGoqP/TG4C038XPH1hwELKCsrJV6Jwbm0XzJO/LQ+2XzBeMkC742oM29347Zw2ucuitqQp08naMszRvIScx4VJf0wDsRevfC94QM4HgkKd6fB9Efn8zAFoavgiUD/vCBz3vi+PtRg9elUbRWVw36Y/6q0yLFFxYD/DIh6LdsO3eYO1WGxW4ALZlHLQGPWaq6Uoy/ImZHvQEM7ecthccqhLbVFAs8fFfNyrvTUZtVpvzLKxhItiwLaWDCtEEARBEARBEARBEARBEARBEARBEARBEARBEARBTifPnn6wfgJCzvsjm/94IIJhXux8GruHth4iZ5j5vOn9oP8uTNM0LkzDMNkr+vIib5gG+5O+QX9EXdpvkqUlZ6WnEnbE5T19Jn3J/syzz2gFGEkTt8b4eLxP7J46iyDIP85/UZfRHKS9CzEAAAAASUVORK5CYII=";
  let image1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAdVBMVEX///8AAAC/v7/09PSioqLS0tIwMDD6+vrl5eV7e3vx8fF4eHjLy8tQUFBGRkarq6vY2NiOjo7e3t6EhIS3t7cXFxcMDAyampo+Pj5hYWHb29uwsLDs7OwgICCgoKBXV1dsbGwsLCyJiYm8vLxlZWU3NzckJCSrYnspAAAE5klEQVR4nO2d13KrQAyGg4MDbsENN1xTzvs/4okhTgyIErMrrTT67pmR/lkWrcry9KQoiqIoiqIoimKTPbUBTJj724Pn7ajNYMB04WX0qS1xnuTi3RhT2+I4vneHilVHz8sxpbbHYYaTvFZeSG2Ruyy9ItQWucuopFVMbZKzvJa08rbUNrnKS1krb01tlKNAWunHEKb4GdT9vZoFqNWA2iwneQe10pMhxBDW6oXaLicBgoYrS2q7XKQcuKesqO1yElgrr0dtl4usYa1eqe1ykoqFpfl3gCOslU9tl5PEoFYTarOcpA8vLGqz3GQAaqUZUhBQKz3ngISQVhphwUSqVXvKeXetFVZSTvrNqU1yl1VBqteA2iKHKWilcXsdOalOQ2pz3OZeKq3lNPAj1ZsG7Y0cPO8wWUT6CUwJ5j1/NjiPZlH/ue0zu2gwyYqum8nAH7d+jjXD5SCfgBkljVt4fw2UL0aJdMEisGizWdekQPtAQH8LwCI8y7GZV7vtvfjgOpnOqh/J1pfMnS08Nfh9ei88sV9fGh5JH5P3yQxqVtUv59/kQuiDPTQQ0tofKmqm0EI5ToNgvGitVIqopMTHn1x/gAW1h8YIi2kEC2yonTTE2L5UX8QiDtwJilZfCIhRoYS6HVbsc4QV/XtW+KR2tiMVtWVLnKnd7URFr6M1WJ8V/xZadmZG7W8X3lClilmfqaeoWp2p3e3GAVMr1ttVZfueHZgfpQNMrbhXzODRG9UKAnNhse9HakqeG4T/uCaeVidqVzuDeIBmn2yoGuqyAP85sWc0rQTkk/1mLw0hoON7i6WVgIWF9y1kH2JhJkipPTUA2pYlobhqvQJ9g3myIQVLKwlvIZpYEr6Fcyyx3qg9NUCv2U0z8D/qIJbsJezvaLks1sWvb1q1RJpAQpsRmljUjprgrGK1By3nQO2oCdDE4p9RRhRLwkU+aOdoCffoo23wEoJStNAhofbUAPDFOxaQkPtDO+5IuIgTrxBG7akB0FI0EnZ4vGbSEbWr3cEr3kt4D/HEKo4KM+SCJpaAkgVaCC+hMQQvdhBwgzDO8GoG+9YQ1Gkwamc7gzmJcqZ2titoeYcr3MMHvMnoK8wvWNmjisV98B5XrJh35QIt/ydBLcxIK4VzoQd12jCF87kHrRz2A+PhMLQraH555dtUgy+W5x2pnX6Upiv+rBAzrSTiVS3y8Dz8EInFM2WDOX5/B7XbjwH+5MQ6XCv6GwqxuDYwU2zxfG9nIxCL7/09qFf3ZFC73AF0rThPPiHesZLBOWWKnajh3VSDvLQ4ZwCxlxbvhYXa9cB7x0pB1IrzpzADMYyndtUA5b8VWoJp3i8HVnGa76nwnor/2JuGa7qhAMp11Px39wyMLGBM7aQxEBqQJEwefmO9LMa4Gl3C9qmHf8vyPZavauNbtwexGj8ImA3LYzGQ51r9qsHaD8MEjO+UsBZtse6QrMJS56SQY04RK7GpuM39hoWMPN+iaiPGG2skRe4lDP/jSbRWLQoY23XS6+92/V4yazxRSrhMspa6nPw2KRT+Qr/ujwWcO99bsr9UKAX3Nz5HFbnDE/vCVyuAc2J8rHF9B00v8mwdfYBh/qu4mjX+kamXH5z6FL9b3RMsv3fvw0fScrRynow+r+fLf9uI+TDmIwRhyLuRQ1EURVEURTHCf8eYSCcC+BLCAAAAAElFTkSuQmCC";
  
  return (
    <div className="App">
     <div className='firstdiv'>
       <div className='flex'> 
     <Date date1={date1}/>
     <Logo image={image}/>
     </div>
     <Subheading />
     <Heading  heading={heading}/>
     <Devices devices={devices}/>
     </div>

     <div className='firstdiv'>
     <div className='flex'> 
     <Date date1={date1}/>
     <Logo image={image}/>
     </div>
     <Subheading />
     <Heading  heading={heading}/>
     <Devices devices={devices}/>
     </div>

     <div className='seconddiv'>
     <div className='flex'> 
     <Date date={date}/>
     <Logo image1={image1}/>
     </div>
     <Subheading  />
     <Heading  heading1={heading1}/>
     <Devices devices1={devices1}/>
     </div>
    </div>
  );
}

export default App;
