import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post

export default class PostsController {
  index(){
    return Post.all
  }
}
