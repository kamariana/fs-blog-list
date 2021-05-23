const totalLikes = require('../utils/list_helper').totalLikes

describe('total likes', () => {
  const blogs = []
  const listWithOneBlog = [
    {
      title: 'An Open Letter to Jason and David',
      author: 'Jane Yang',
      url: 'https://janeyang.org/2021/04/27/an-open-letter-to-jason-and-david/',
      likes: 3,
      id: '60a6872ce43fdd913cfd1658'
    }
  ]
  const biggerList = [
    {
      title: 'An Open Letter to Jason and David',
      author: 'Jane Yang',
      url: 'https://janeyang.org/2021/04/27/an-open-letter-to-jason-and-david/',
      likes: 3,
      id: '60a6872ce43fdd913cfd1658'
    },
    {
      title: 'Which jobs help people the most?',
      author: 'Benjamin Todd',
      url: 'https://80000hours.org/career-guide/high-impact-jobs/#approach-1-earning-to-give',
      likes: 2,
      id: '60a8bffd37184e1d110b4e94'
    },
    {
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 7,
      id: '60a8c1dc37184e1d110b4e95'
    },
    {
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      id: '60a8c1f137184e1d110b4e96'
    },
    {
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
      likes: 12,
      id: '60a8c20937184e1d110b4e97'
    },
    {
      title: 'First class tests',
      author: 'Robert C. Martin',
      url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
      likes: 10,
      id: '60a8c23e37184e1d110b4e98'
    },
    {
      title: 'TDD harms architecture',
      author: 'Robert C. Martin',
      url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
      likes: 0,
      id: '60a8c25137184e1d110b4e99'
    },
    {
      title: 'Type wars',
      author: 'Robert C. Martin',
      url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
      likes: 2,
      id: '60a8c26a37184e1d110b4e9a'
    }
  ]

  test('of empty list is zero', () => {
    expect(totalLikes(blogs)).toBe(0)
  })

  test('when list has only one blog, equals the likes of that', () => {
    expect(totalLikes(listWithOneBlog)).toBe(3)
  })

  test('of a bigger list is calculated right', () => {
    expect(totalLikes(biggerList)).toBe(41)
  })
})