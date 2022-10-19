import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import PostValidator from 'App/Validators/PostValidator'
import UpdatePostValidator from 'App/Validators/UpdatePostValidator'

export default class PostsController {
  public async index({}: HttpContextContract) {
    const posts = await Post.all()
    return posts
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(PostValidator)
    const post = await Post.create(data)
    return post
  }

  public async show({ params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)

    return post
  }

  public async update({ params, request }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    const data = await request.validate(UpdatePostValidator)
    post.merge(data)
    await post.save()
  }

  public async destroy({ params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    await post.delete()
  }
}
