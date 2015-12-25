(function () {

    var laroute = (function () {

        var routes = {

            absolute: false,
            rootUrl: 'http://asgardcms.com',
            routes : [{"host":null,"methods":["GET","HEAD"],"uri":"_debugbar\/open","name":"debugbar.openhandler","action":"Barryvdh\Debugbar\Controllers\OpenHandlerController@handle"},{"host":null,"methods":["GET","HEAD"],"uri":"_debugbar\/clockwork\/{id}","name":"debugbar.clockwork","action":"Barryvdh\Debugbar\Controllers\OpenHandlerController@clockwork"},{"host":null,"methods":["GET","HEAD"],"uri":"_debugbar\/assets\/stylesheets","name":"debugbar.assets.css","action":"Barryvdh\Debugbar\Controllers\AssetController@css"},{"host":null,"methods":["GET","HEAD"],"uri":"_debugbar\/assets\/javascript","name":"debugbar.assets.js","action":"Barryvdh\Debugbar\Controllers\AssetController@js"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/profile\/profiles","name":"admin.profile.profile.index","action":"Modules\Profile\Http\Controllers\Admin\ProfileController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/profile\/profiles\/create","name":"admin.profile.profile.create","action":"Modules\Profile\Http\Controllers\Admin\ProfileController@create"},{"host":null,"methods":["POST"],"uri":"backend\/profile\/profiles","name":"admin.profile.profile.store","action":"Modules\Profile\Http\Controllers\Admin\ProfileController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/profile\/profiles\/{profiles}\/edit","name":"admin.profile.profile.edit","action":"Modules\Profile\Http\Controllers\Admin\ProfileController@edit"},{"host":null,"methods":["PUT"],"uri":"backend\/profile\/profiles\/{profiles}","name":"admin.profile.profile.update","action":"Modules\Profile\Http\Controllers\Admin\ProfileController@update"},{"host":null,"methods":["PATCH"],"uri":"backend\/profile\/profiles\/{profiles}","name":null,"action":"Modules\Profile\Http\Controllers\Admin\ProfileController@update"},{"host":null,"methods":["DELETE"],"uri":"backend\/profile\/profiles\/{profiles}","name":"admin.profile.profile.destroy","action":"Modules\Profile\Http\Controllers\Admin\ProfileController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"account","name":"user.account","action":"Modules\Profile\Http\Controllers\Frontend\ProfileController@show"},{"host":null,"methods":["POST"],"uri":"account","name":"user.account.update","action":"Modules\Profile\Http\Controllers\Frontend\ProfileController@update"},{"host":null,"methods":["GET","HEAD"],"uri":"beta-access","name":"user.beta","action":"Modules\Profile\Http\Controllers\Frontend\ProfileController@beta"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/documentation\/docs","name":"admin.docs.index","action":"Modules\Documentation\Http\Controllers\Admin\DocumentationController@index"},{"host":null,"methods":["POST"],"uri":"backend\/documentation\/docs\/refresh","name":"admin.docs.refresh","action":"Modules\Documentation\Http\Controllers\Admin\DocumentationController@refresh"},{"host":null,"methods":["GET","HEAD"],"uri":"docs","name":"doc.index","action":"Modules\Documentation\Http\Controllers\Frontend\DocumentationController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/core-module\/assetmanager","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/core-module\/configuration","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/core-module\/form-macros","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/core-module\/helpers","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/core-module\/index","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/core-module\/navigation","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/core-module\/permissions","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/core-module\/repositories","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/dashboard-module\/widgets","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/getting-started\/contributing","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/getting-started\/installation","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/getting-started\/used-technology","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/media-module\/configuration","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/media-module\/events","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/media-module\/getting-a-thumbnail","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/media-module\/index","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/media-module\/refreshing-thumbnails","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/media-module\/relations","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/media-module\/thumbnails","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/menu-module\/displaying-menus","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/menu-module\/managing-menus","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/page-module\/custom-fields","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/setting-module\/adding-settings","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/setting-module\/available-fields","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/setting-module\/custom-fields","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/setting-module\/events","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/setting-module\/index","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/setting-module\/reading-settings","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/themes\/usage","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/upgrade-guides\/core","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/upgrade-guides\/media","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/upgrade-guides\/menu","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/upgrade-guides\/page","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/upgrade-guides\/platform","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/upgrade-guides\/setting","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/upgrade-guides\/translation","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/upgrade-guides\/user","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/upgrade-guides\/workshop","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/user-module\/adding-additional-user-data","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/user-module\/configuration","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/user-module\/drivers","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/user-module\/events","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/user-module\/middleware","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/user-module\/users","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/workshop-module\/module-scaffold","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"docs\/workshop-module\/theme-scaffold","name":null,"action":"Closure"},{"host":null,"methods":["POST"],"uri":"update\/docs","name":null,"action":"Modules\Documentation\Http\Controllers\Frontend\DocumentationController@update"},{"host":null,"methods":["POST"],"uri":"api\/subscribe","name":"subscribe","action":"Modules\Entry\Http\Controllers\Api\EntryController@subscribe"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/entry\/entries","name":"admin.entry.entry.index","action":"Modules\Entry\Http\Controllers\Admin\EntryController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/entry\/invite\/{email}","name":"admin.entry.entry.invite","action":"Modules\Entry\Http\Controllers\Admin\EntryController@invite"},{"host":null,"methods":["POST"],"uri":"backend\/entry\/batch-invite","name":"admin.entry.entry.batch-invite","action":"Modules\Entry\Http\Controllers\Admin\EntryController@batchInvite"},{"host":null,"methods":["GET","HEAD"],"uri":"last\/action\/{token}","name":"last.action","action":"Modules\Entry\Http\Controllers\Frontend\EntryController@validateInvite"},{"host":null,"methods":["POST"],"uri":"last\/action\/{token}","name":"last.action.post","action":"Modules\Entry\Http\Controllers\Frontend\EntryController@addToOrganisation"},{"host":null,"methods":["GET","HEAD"],"uri":"subscribe\/{emailaddress}","name":"beta.subscribe","action":"Modules\Entry\Http\Controllers\Frontend\EntryController@subscribe"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/subscribe","name":null,"action":"Closure"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/faq\/faqs","name":"admin.faq.faq.index","action":"Modules\Faq\Http\Controllers\Admin\FaqController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/faq\/faqs\/create","name":"admin.faq.faq.create","action":"Modules\Faq\Http\Controllers\Admin\FaqController@create"},{"host":null,"methods":["POST"],"uri":"backend\/faq\/faqs","name":"admin.faq.faq.store","action":"Modules\Faq\Http\Controllers\Admin\FaqController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/faq\/faqs\/{faqs}\/edit","name":"admin.faq.faq.edit","action":"Modules\Faq\Http\Controllers\Admin\FaqController@edit"},{"host":null,"methods":["PUT"],"uri":"backend\/faq\/faqs\/{faqs}","name":"admin.faq.faq.update","action":"Modules\Faq\Http\Controllers\Admin\FaqController@update"},{"host":null,"methods":["PATCH"],"uri":"backend\/faq\/faqs\/{faqs}","name":null,"action":"Modules\Faq\Http\Controllers\Admin\FaqController@update"},{"host":null,"methods":["DELETE"],"uri":"backend\/faq\/faqs\/{faqs}","name":"admin.faq.faq.destroy","action":"Modules\Faq\Http\Controllers\Admin\FaqController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"faq","name":"faq","action":"Modules\Faq\Http\Controllers\Frontend\FaqController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/tag","name":"api.tag.index","action":"Modules\Blog\Http\Controllers\Api\TagController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/tag\/create","name":"api.tag.create","action":"Modules\Blog\Http\Controllers\Api\TagController@create"},{"host":null,"methods":["POST"],"uri":"api\/tag","name":"api.tag.store","action":"Modules\Blog\Http\Controllers\Api\TagController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/tag\/{tag}","name":"api.tag.show","action":"Modules\Blog\Http\Controllers\Api\TagController@show"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/tag\/{tag}\/edit","name":"api.tag.edit","action":"Modules\Blog\Http\Controllers\Api\TagController@edit"},{"host":null,"methods":["PUT"],"uri":"api\/tag\/{tag}","name":"api.tag.update","action":"Modules\Blog\Http\Controllers\Api\TagController@update"},{"host":null,"methods":["PATCH"],"uri":"api\/tag\/{tag}","name":null,"action":"Modules\Blog\Http\Controllers\Api\TagController@update"},{"host":null,"methods":["DELETE"],"uri":"api\/tag\/{tag}","name":"api.tag.destroy","action":"Modules\Blog\Http\Controllers\Api\TagController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/tag\/findByName\/{name?}","name":"api.tag.findByName","action":"Modules\Blog\Http\Controllers\Api\TagController@findByName"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/blog\/posts","name":"admin.blog.post.index","action":"Modules\Blog\Http\Controllers\Admin\PostController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/blog\/posts\/create","name":"admin.blog.post.create","action":"Modules\Blog\Http\Controllers\Admin\PostController@create"},{"host":null,"methods":["POST"],"uri":"backend\/blog\/posts","name":"admin.blog.post.store","action":"Modules\Blog\Http\Controllers\Admin\PostController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/blog\/posts\/{post}\/edit","name":"admin.blog.post.edit","action":"Modules\Blog\Http\Controllers\Admin\PostController@edit"},{"host":null,"methods":["PUT"],"uri":"backend\/blog\/posts\/{post}","name":"admin.blog.post.update","action":"Modules\Blog\Http\Controllers\Admin\PostController@update"},{"host":null,"methods":["DELETE"],"uri":"backend\/blog\/posts\/{post}","name":"admin.blog.post.destroy","action":"Modules\Blog\Http\Controllers\Admin\PostController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/blog\/categories","name":"admin.blog.category.index","action":"Modules\Blog\Http\Controllers\Admin\CategoryController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/blog\/categories\/create","name":"admin.blog.category.create","action":"Modules\Blog\Http\Controllers\Admin\CategoryController@create"},{"host":null,"methods":["POST"],"uri":"backend\/blog\/categories","name":"admin.blog.category.store","action":"Modules\Blog\Http\Controllers\Admin\CategoryController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/blog\/categories\/{category}\/edit","name":"admin.blog.category.edit","action":"Modules\Blog\Http\Controllers\Admin\CategoryController@edit"},{"host":null,"methods":["PUT"],"uri":"backend\/blog\/categories\/{category}","name":"admin.blog.category.update","action":"Modules\Blog\Http\Controllers\Admin\CategoryController@update"},{"host":null,"methods":["DELETE"],"uri":"backend\/blog\/categories\/{category}","name":"admin.blog.category.destroy","action":"Modules\Blog\Http\Controllers\Admin\CategoryController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/blog\/tags","name":"admin.blog.tag.index","action":"Modules\Blog\Http\Controllers\Admin\TagController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/blog\/tags\/create","name":"admin.blog.tag.create","action":"Modules\Blog\Http\Controllers\Admin\TagController@create"},{"host":null,"methods":["POST"],"uri":"backend\/blog\/tags","name":"admin.blog.tag.store","action":"Modules\Blog\Http\Controllers\Admin\TagController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/blog\/tags\/{tag}\/edit","name":"admin.blog.tag.edit","action":"Modules\Blog\Http\Controllers\Admin\TagController@edit"},{"host":null,"methods":["PUT"],"uri":"backend\/blog\/tags\/{tag}","name":"admin.blog.tag.update","action":"Modules\Blog\Http\Controllers\Admin\TagController@update"},{"host":null,"methods":["DELETE"],"uri":"backend\/blog\/tags\/{tag}","name":"admin.blog.tag.destroy","action":"Modules\Blog\Http\Controllers\Admin\TagController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"blog\/posts","name":"en.blog","action":"Modules\Blog\Http\Controllers\PublicController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"blog\/posts\/{slug}","name":"en.blog.slug","action":"Modules\Blog\Http\Controllers\PublicController@show"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/user\/users","name":"admin.user.user.index","action":"Modules\User\Http\Controllers\Admin\UserController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/user\/users\/create","name":"admin.user.user.create","action":"Modules\User\Http\Controllers\Admin\UserController@create"},{"host":null,"methods":["POST"],"uri":"backend\/user\/users","name":"admin.user.user.store","action":"Modules\User\Http\Controllers\Admin\UserController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/user\/users\/{users}\/edit","name":"admin.user.user.edit","action":"Modules\User\Http\Controllers\Admin\UserController@edit"},{"host":null,"methods":["PUT"],"uri":"backend\/user\/users\/{users}\/edit","name":"admin.user.user.update","action":"Modules\User\Http\Controllers\Admin\UserController@update"},{"host":null,"methods":["DELETE"],"uri":"backend\/user\/users\/{users}","name":"admin.user.user.destroy","action":"Modules\User\Http\Controllers\Admin\UserController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/user\/roles","name":"admin.user.role.index","action":"Modules\User\Http\Controllers\Admin\RolesController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/user\/roles\/create","name":"admin.user.role.create","action":"Modules\User\Http\Controllers\Admin\RolesController@create"},{"host":null,"methods":["POST"],"uri":"backend\/user\/roles","name":"admin.user.role.store","action":"Modules\User\Http\Controllers\Admin\RolesController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/user\/roles\/{roles}\/edit","name":"admin.user.role.edit","action":"Modules\User\Http\Controllers\Admin\RolesController@edit"},{"host":null,"methods":["PUT"],"uri":"backend\/user\/roles\/{roles}\/edit","name":"admin.user.role.update","action":"Modules\User\Http\Controllers\Admin\RolesController@update"},{"host":null,"methods":["DELETE"],"uri":"backend\/user\/roles\/{roles}","name":"admin.user.role.destroy","action":"Modules\User\Http\Controllers\Admin\RolesController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"auth\/login","name":"login","action":"Modules\User\Http\Controllers\AuthController@getLogin"},{"host":null,"methods":["POST"],"uri":"auth\/login","name":"login.post","action":"Modules\User\Http\Controllers\AuthController@postLogin"},{"host":null,"methods":["GET","HEAD"],"uri":"auth\/register","name":"register","action":"Modules\User\Http\Controllers\AuthController@getRegister"},{"host":null,"methods":["POST"],"uri":"auth\/register","name":"register.post","action":"Modules\User\Http\Controllers\AuthController@postRegister"},{"host":null,"methods":["GET","HEAD"],"uri":"auth\/activate\/{userId}\/{activationCode}","name":null,"action":"Modules\User\Http\Controllers\AuthController@getActivate"},{"host":null,"methods":["GET","HEAD"],"uri":"auth\/reset","name":"reset","action":"Modules\User\Http\Controllers\AuthController@getReset"},{"host":null,"methods":["POST"],"uri":"auth\/reset","name":"reset.post","action":"Modules\User\Http\Controllers\AuthController@postReset"},{"host":null,"methods":["GET","HEAD"],"uri":"auth\/reset\/{id}\/{code}","name":"reset.complete","action":"Modules\User\Http\Controllers\AuthController@getResetComplete"},{"host":null,"methods":["POST"],"uri":"auth\/reset\/{id}\/{code}","name":"reset.complete.post","action":"Modules\User\Http\Controllers\AuthController@postResetComplete"},{"host":null,"methods":["GET","HEAD"],"uri":"auth\/logout","name":"logout","action":"Modules\User\Http\Controllers\AuthController@getLogout"},{"host":null,"methods":["POST"],"uri":"api\/translation\/update","name":"api.translation.translations.update","action":"Modules\Translation\Http\Controllers\Api\TranslationController@update"},{"host":null,"methods":["POST"],"uri":"api\/translation\/clearCache","name":"api.translation.translations.clearCache","action":"Modules\Translation\Http\Controllers\Api\TranslationController@clearCache"},{"host":null,"methods":["POST"],"uri":"api\/translation\/revisions","name":"api.translation.translations.revisions","action":"Modules\Translation\Http\Controllers\Api\TranslationController@revisions"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/translation\/translations","name":"admin.translation.translation.index","action":"Modules\Translation\Http\Controllers\Admin\TranslationController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/translation\/translations\/update\/{translations}","name":"admin.translation.translation.update","action":"Modules\Translation\Http\Controllers\Admin\TranslationController@update"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/translation\/translations\/export","name":"admin.translation.translation.export","action":"Modules\Translation\Http\Controllers\Admin\TranslationController@export"},{"host":null,"methods":["POST"],"uri":"backend\/translation\/translations\/import","name":"admin.translation.translation.import","action":"Modules\Translation\Http\Controllers\Admin\TranslationController@import"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/testimonial\/testimonial","name":"admin.testimonials.testimonial.index","action":"Modules\Testimonial\Http\Controllers\Admin\TestimonialController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/testimonial\/testimonial\/create","name":"admin.testimonials.testimonial.create","action":"Modules\Testimonial\Http\Controllers\Admin\TestimonialController@create"},{"host":null,"methods":["POST"],"uri":"backend\/testimonial\/testimonial","name":"admin.testimonials.testimonial.store","action":"Modules\Testimonial\Http\Controllers\Admin\TestimonialController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/testimonial\/testimonial\/{testimonial}\/edit","name":"admin.testimonials.testimonial.edit","action":"Modules\Testimonial\Http\Controllers\Admin\TestimonialController@edit"},{"host":null,"methods":["PUT"],"uri":"backend\/testimonial\/testimonial\/{testimonial}","name":"admin.testimonials.testimonial.update","action":"Modules\Testimonial\Http\Controllers\Admin\TestimonialController@update"},{"host":null,"methods":["PATCH"],"uri":"backend\/testimonial\/testimonial\/{testimonial}","name":null,"action":"Modules\Testimonial\Http\Controllers\Admin\TestimonialController@update"},{"host":null,"methods":["DELETE"],"uri":"backend\/testimonial\/testimonial\/{testimonial}","name":"admin.testimonials.testimonial.destroy","action":"Modules\Testimonial\Http\Controllers\Admin\TestimonialController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"testimonials","name":"testimonials","action":"Modules\Testimonial\Http\Controllers\PublicController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/setting\/settings\/{module}","name":"dashboard.module.settings","action":"Modules\Setting\Http\Controllers\Admin\SettingController@getModuleSettings"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/setting\/settings","name":"admin.setting.settings.index","action":"Modules\Setting\Http\Controllers\Admin\SettingController@index"},{"host":null,"methods":["POST"],"uri":"backend\/setting\/settings","name":"admin.setting.settings.store","action":"Modules\Setting\Http\Controllers\Admin\SettingController@store"},{"host":null,"methods":["POST"],"uri":"api\/file","name":"api.media.store","action":"Modules\Media\Http\Controllers\Api\MediaController@store"},{"host":null,"methods":["POST"],"uri":"api\/media\/link","name":"api.media.link","action":"Modules\Media\Http\Controllers\Api\MediaController@linkMedia"},{"host":null,"methods":["POST"],"uri":"api\/media\/unlink","name":"api.media.unlink","action":"Modules\Media\Http\Controllers\Api\MediaController@unlinkMedia"},{"host":null,"methods":["GET","HEAD"],"uri":"api\/media\/all","name":"api.media.all","action":"Modules\Media\Http\Controllers\Api\MediaController@all"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/media\/media","name":"admin.media.media.index","action":"Modules\Media\Http\Controllers\Admin\MediaController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/media\/media\/create","name":"admin.media.media.create","action":"Modules\Media\Http\Controllers\Admin\MediaController@create"},{"host":null,"methods":["POST"],"uri":"backend\/media\/media","name":"admin.media.media.store","action":"Modules\Media\Http\Controllers\Admin\MediaController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/media\/media\/{media}\/edit","name":"admin.media.media.edit","action":"Modules\Media\Http\Controllers\Admin\MediaController@edit"},{"host":null,"methods":["PUT"],"uri":"backend\/media\/media\/{media}","name":"admin.media.media.update","action":"Modules\Media\Http\Controllers\Admin\MediaController@update"},{"host":null,"methods":["DELETE"],"uri":"backend\/media\/media\/{media}","name":"admin.media.media.destroy","action":"Modules\Media\Http\Controllers\Admin\MediaController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/media\/media-grid\/index","name":"media.grid.select","action":"Modules\Media\Http\Controllers\Admin\MediaGridController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/media\/media-grid\/ckIndex","name":"media.grid.ckeditor","action":"Modules\Media\Http\Controllers\Admin\MediaGridController@ckIndex"},{"host":null,"methods":["POST"],"uri":"api\/menuitem\/update","name":"api.menuitem.update","action":"Modules\Menu\Http\Controllers\Api\MenuItemController@update"},{"host":null,"methods":["POST"],"uri":"api\/menuitem\/delete","name":"api.menuitem.delete","action":"Modules\Menu\Http\Controllers\Api\MenuItemController@delete"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/menu\/menus","name":"admin.menu.menu.index","action":"Modules\Menu\Http\Controllers\Admin\MenuController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/menu\/menus\/create","name":"admin.menu.menu.create","action":"Modules\Menu\Http\Controllers\Admin\MenuController@create"},{"host":null,"methods":["POST"],"uri":"backend\/menu\/menus","name":"admin.menu.menu.store","action":"Modules\Menu\Http\Controllers\Admin\MenuController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/menu\/menus\/{menu}\/edit","name":"admin.menu.menu.edit","action":"Modules\Menu\Http\Controllers\Admin\MenuController@edit"},{"host":null,"methods":["PUT"],"uri":"backend\/menu\/menus\/{menu}","name":"admin.menu.menu.update","action":"Modules\Menu\Http\Controllers\Admin\MenuController@update"},{"host":null,"methods":["DELETE"],"uri":"backend\/menu\/menus\/{menu}","name":"admin.menu.menu.destroy","action":"Modules\Menu\Http\Controllers\Admin\MenuController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/menu\/menus\/{menu}\/menuitem","name":"dashboard.menuitem.index","action":"Modules\Menu\Http\Controllers\Admin\MenuItemController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/menu\/menus\/{menu}\/menuitem\/create","name":"dashboard.menuitem.create","action":"Modules\Menu\Http\Controllers\Admin\MenuItemController@create"},{"host":null,"methods":["POST"],"uri":"backend\/menu\/menus\/{menu}\/menuitem","name":"dashboard.menuitem.store","action":"Modules\Menu\Http\Controllers\Admin\MenuItemController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/menu\/menus\/{menu}\/menuitem\/{menuitem}\/edit","name":"dashboard.menuitem.edit","action":"Modules\Menu\Http\Controllers\Admin\MenuItemController@edit"},{"host":null,"methods":["PUT"],"uri":"backend\/menu\/menus\/{menu}\/menuitem\/{menuitem}","name":"dashboard.menuitem.update","action":"Modules\Menu\Http\Controllers\Admin\MenuItemController@update"},{"host":null,"methods":["DELETE"],"uri":"backend\/menu\/menus\/{menu}\/menuitem\/{menuitem}","name":"dashboard.menuitem.destroy","action":"Modules\Menu\Http\Controllers\Admin\MenuItemController@destroy"},{"host":null,"methods":["POST"],"uri":"api\/sites\/submit","name":"api.sites.submit","action":"Modules\Gallery\Http\Controllers\Api\SitesController@create"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/gallery\/galleries","name":"admin.gallery.gallery.index","action":"Modules\Gallery\Http\Controllers\Admin\GalleryController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/gallery\/galleries\/create","name":"admin.gallery.gallery.create","action":"Modules\Gallery\Http\Controllers\Admin\GalleryController@create"},{"host":null,"methods":["POST"],"uri":"backend\/gallery\/galleries","name":"admin.gallery.gallery.store","action":"Modules\Gallery\Http\Controllers\Admin\GalleryController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/gallery\/galleries\/{galleries}\/edit","name":"admin.gallery.gallery.edit","action":"Modules\Gallery\Http\Controllers\Admin\GalleryController@edit"},{"host":null,"methods":["PUT"],"uri":"backend\/gallery\/galleries\/{galleries}\/edit","name":"admin.gallery.gallery.update","action":"Modules\Gallery\Http\Controllers\Admin\GalleryController@update"},{"host":null,"methods":["DELETE"],"uri":"backend\/gallery\/galleries\/{galleries}","name":"admin.gallery.gallery.destroy","action":"Modules\Gallery\Http\Controllers\Admin\GalleryController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"gallery","name":"gallery.index","action":"Modules\Gallery\Http\Controllers\GalleryController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"reset_op_cache","name":null,"action":"Modules\Gallery\Http\Controllers\GalleryController@resetOpCache"},{"host":null,"methods":["GET","HEAD"],"uri":"backend","name":"dashboard.index","action":"Modules\Dashboard\Http\Controllers\Admin\DashboardController@index"},{"host":null,"methods":["POST"],"uri":"backend\/dashboard\/grid","name":"dashboard.grid.save","action":"Modules\Dashboard\Http\Controllers\Admin\DashboardController@save"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/dashboard\/grid","name":"dashboard.grid.reset","action":"Modules\Dashboard\Http\Controllers\Admin\DashboardController@reset"},{"host":null,"methods":["POST"],"uri":"api\/workshop\/modules\/{module}\/publish","name":"api.workshop.module.publish","action":"Modules\Workshop\Http\Controllers\Api\ModulesController@publishAssets"},{"host":null,"methods":["POST"],"uri":"api\/workshop\/themes\/{theme}\/publish","name":"api.workshop.theme.publish","action":"Modules\Workshop\Http\Controllers\Api\ThemeController@publishAssets"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/workshop\/modules","name":"admin.workshop.modules.index","action":"Modules\Workshop\Http\Controllers\Admin\ModulesController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/workshop\/modules\/{module}","name":"admin.workshop.modules.show","action":"Modules\Workshop\Http\Controllers\Admin\ModulesController@show"},{"host":null,"methods":["POST"],"uri":"backend\/workshop\/modules","name":"admin.workshop.modules.store","action":"Modules\Workshop\Http\Controllers\Admin\ModulesController@store"},{"host":null,"methods":["POST"],"uri":"backend\/workshop\/modules\/update","name":"admin.workshop.modules.update","action":"Modules\Workshop\Http\Controllers\Admin\ModulesController@update"},{"host":null,"methods":["POST"],"uri":"backend\/workshop\/modules\/disable\/{module}","name":"admin.workshop.modules.disable","action":"Modules\Workshop\Http\Controllers\Admin\ModulesController@disable"},{"host":null,"methods":["POST"],"uri":"backend\/workshop\/modules\/enable\/{module}","name":"admin.workshop.modules.enable","action":"Modules\Workshop\Http\Controllers\Admin\ModulesController@enable"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/workshop\/themes","name":"admin.workshop.themes.index","action":"Modules\Workshop\Http\Controllers\Admin\ThemesController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/workshop\/themes\/{theme}","name":"admin.workshop.themes.show","action":"Modules\Workshop\Http\Controllers\Admin\ThemesController@show"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/workshop\/workbench","name":"admin.workshop.workbench.index","action":"Modules\Workshop\Http\Controllers\Admin\WorkbenchController@index"},{"host":null,"methods":["POST"],"uri":"backend\/workshop\/generate","name":"admin.workshop.workbench.generate.index","action":"Modules\Workshop\Http\Controllers\Admin\WorkbenchController@generate"},{"host":null,"methods":["POST"],"uri":"backend\/workshop\/migrate","name":"admin.workshop.workbench.migrate.index","action":"Modules\Workshop\Http\Controllers\Admin\WorkbenchController@migrate"},{"host":null,"methods":["POST"],"uri":"backend\/workshop\/install","name":"admin.workshop.workbench.install.index","action":"Modules\Workshop\Http\Controllers\Admin\WorkbenchController@install"},{"host":null,"methods":["POST"],"uri":"backend\/workshop\/seed","name":"admin.workshop.workbench.seed.index","action":"Modules\Workshop\Http\Controllers\Admin\WorkbenchController@seed"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/page\/pages","name":"admin.page.page.index","action":"Modules\Page\Http\Controllers\Admin\PageController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/page\/pages\/create","name":"admin.page.page.create","action":"Modules\Page\Http\Controllers\Admin\PageController@create"},{"host":null,"methods":["POST"],"uri":"backend\/page\/pages","name":"admin.page.page.store","action":"Modules\Page\Http\Controllers\Admin\PageController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/page\/pages\/{page}\/edit","name":"admin.page.page.edit","action":"Modules\Page\Http\Controllers\Admin\PageController@edit"},{"host":null,"methods":["PUT"],"uri":"backend\/page\/pages\/{page}\/edit","name":"admin.page.page.update","action":"Modules\Page\Http\Controllers\Admin\PageController@update"},{"host":null,"methods":["DELETE"],"uri":"backend\/page\/pages\/{page}","name":"admin.page.page.destroy","action":"Modules\Page\Http\Controllers\Admin\PageController@destroy"}],

            route : function (name, parameters, route) {
                route = route || this.getByName(name);

                if ( ! route ) {
                    return undefined;
                }

                return this.toRoute(route, parameters);
            },

            url: function (url, parameters) {
                parameters = parameters || [];

                var uri = url + '/' + parameters.join('/');

                return this.getCorrectUrl(uri);
            },

            toRoute : function (route, parameters) {
                var uri = this.replaceNamedParameters(route.uri, parameters);
                var qs  = this.getRouteQueryString(parameters);

                return this.getCorrectUrl(uri + qs);
            },

            replaceNamedParameters : function (uri, parameters) {
                uri = uri.replace(/\{(.*?)\??\}/g, function(match, key) {
                    if (parameters.hasOwnProperty(key)) {
                        var value = parameters[key];
                        delete parameters[key];
                        return value;
                    } else {
                        return match;
                    }
                });

                // Strip out any optional parameters that were not given
                uri = uri.replace(/\/\{.*?\?\}/g, '');

                return uri;
            },

            getRouteQueryString : function (parameters) {
                var qs = [];
                for (var key in parameters) {
                    if (parameters.hasOwnProperty(key)) {
                        qs.push(key + '=' + parameters[key]);
                    }
                }

                if (qs.length < 1) {
                    return '';
                }

                return '?' + qs.join('&');
            },

            getByName : function (name) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].name === name) {
                        return this.routes[key];
                    }
                }
            },

            getByAction : function(action) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].action === action) {
                        return this.routes[key];
                    }
                }
            },

            getCorrectUrl: function (uri) {
                var url = '/' + uri.replace(/^\/?/, '');

                if(!this.absolute)
                    return url;

                return this.rootUrl.replace('/\/?$/', '') + url;
            }
        };

        var getLinkAttributes = function(attributes) {
            if ( ! attributes) {
                return '';
            }

            var attrs = [];
            for (var key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    attrs.push(key + '="' + attributes[key] + '"');
                }
            }

            return attrs.join(' ');
        };

        var getHtmlLink = function (url, title, attributes) {
            title      = title || url;
            attributes = getLinkAttributes(attributes);

            return '<a href="' + url + '" ' + attributes + '>' + title + '</a>';
        };

        return {
            // Generate a url for a given controller action.
            // laroute.action('HomeController@getIndex', [params = {}])
            action : function (name, parameters) {
                parameters = parameters || {};

                return routes.route(name, parameters, routes.getByAction(name));
            },

            // Generate a url for a given named route.
            // laroute.route('routeName', [params = {}])
            route : function (route, parameters) {
                parameters = parameters || {};

                return routes.route(route, parameters);
            },

            // Generate a fully qualified URL to the given path.
            // laroute.route('url', [params = {}])
            url : function (route, parameters) {
                parameters = parameters || {};

                return routes.url(route, parameters);
            },

            // Generate a html link to the given url.
            // laroute.link_to('foo/bar', [title = url], [attributes = {}])
            link_to : function (url, title, attributes) {
                url = this.url(url);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given route.
            // laroute.link_to_route('route.name', [title=url], [parameters = {}], [attributes = {}])
            link_to_route : function (route, title, parameters, attributes) {
                var url = this.route(route, parameters);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given controller action.
            // laroute.link_to_action('HomeController@getIndex', [title=url], [parameters = {}], [attributes = {}])
            link_to_action : function(action, title, parameters, attributes) {
                var url = this.action(action, parameters);

                return getHtmlLink(url, title, attributes);
            }

        };

    }).call(this);

    /**
     * Expose the class either via AMD, CommonJS or the global object
     */
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return laroute;
        });
    }
    else if (typeof module === 'object' && module.exports){
        module.exports = laroute;
    }
    else {
        window.laroute = laroute;
    }

}).call(this);
