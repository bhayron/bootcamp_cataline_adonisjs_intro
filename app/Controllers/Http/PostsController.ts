import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import PostValidator from 'App/Validators/PostValidator'
import UpdatePostValidator from 'App/Validators/UpdatePostValidator'

export default class PostsController {
  public async index({}: HttpContextContract) {
    const posts = await Post.query().orderBy('id', 'asc').preload('author')
    return posts
  }

  public async store({ request, auth }: HttpContextContract) {
    const data = await request.validate(PostValidator)
    const user = await auth.authenticate()

    const post = await Post.create({
      authorId: user.id,
      ...data,
    })
    await post.preload('author')
    return post
  }

  public async show({ params }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)
    await post.preload('author')

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
