/**
 * Formatting props
 *
 * @Reference:
 * https://github.com/planningcenter/react-patterns#formatting-props
 */

class TestComponent extends Component {
  render() {
    return (
      <div>
        // bad
        <Person
          firstName="Michael"/>
        // good
        <Person firstName="Michael"/>

        // bad
        <Person firstName="Michael" lastName="Chan" occupation="Designer" favoriteFood="Drunken Noodles"/>
        // good
        <Person
          firstName="Michael"
          lastName="Chan"
          occupation="Designer"
          favoriteFood="Drunken Noodles"/>
      </div>
    )
  }
}

